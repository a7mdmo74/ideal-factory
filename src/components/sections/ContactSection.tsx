'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { contactSchema } from '@/lib/validations'
import { submitContactForm } from '@/actions/contact.actions'

import type { ContactFormData } from '@/types'
import Image from 'next/image'

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(formData: ContactFormData) {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      // Create FormData properly
      const fd = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        if (value !== undefined) {
          fd.append(key, String(value))
        }
      })

      const response = await submitContactForm(fd)

      if (response.success) {
        setSubmitStatus('success')
        reset()

        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(response.error)
      }
    } catch (error) {
      console.error(error)
      setSubmitStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass =
    'h-12 w-full rounded-md border border-transparent bg-[#F3F3F3] px-4 text-black placeholder:text-gray-500 outline-none transition focus:border-[#5EB8C5] focus:ring-2 focus:ring-[#5EB8C5]/30'

  return (
    <section className="relative overflow-hidden bg-black py-24">
      {/* Top Left Pattern */}
      <div className="absolute left-0 bottom-0 pointer-events-none">
        <Image src="/images/contact.png" alt="" width={300} height={300} className="opacity-70" />
      </div>

      {/* Bottom Right Pattern */}
      <div className="absolute top-0 right-0 pointer-events-none">
        <Image
          src="/images/contact.png"
          alt=""
          width={300}
          height={300}
          className="rotate-180 opacity-70"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-md">
            <div className="mb-8">
              <span className="inline-flex rounded-lg bg-[#5EB8C5] px-6 py-2 text-sm font-medium text-white">
                Get in touch
              </span>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-white lg:text-5xl">
              Let&apos;s discuss your project!
            </h2>

            <p className="text-lg leading-8 text-gray-300">
              Contact us today and learn more about how our interior fit out & custom manufacturing
              services can bring your ideas to life.
            </p>
          </div>

          {/* Right Form */}
          <div>
            <h3 className="mb-8 text-3xl font-bold text-white lg:text-4xl">
              We Love to Hear From You
            </h3>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/* Name + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    {...register('full_name')}
                    type="text"
                    placeholder="Your Name"
                    className={`${inputClass} ${errors.full_name ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />

                  {errors.full_name && (
                    <p className="mt-1 text-sm text-red-400">{errors.full_name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Your Email"
                    className={`${inputClass} ${errors.email ? 'border-red-500' : ''}`}
                    disabled={isSubmitting}
                  />

                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <input
                  {...register('phone')}
                  type="tel"
                  placeholder="Phone Number"
                  className={`${inputClass} ${errors.phone ? 'border-red-500' : ''}`}
                  disabled={isSubmitting}
                />

                {errors.phone && (
                  <p className="mt-1 text-sm text-red-400">{errors.phone.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <textarea
                  {...register('message')}
                  rows={6}
                  placeholder="Message"
                  className={`w-full rounded-md border border-transparent bg-[#F3F3F3] px-4 py-3 text-black placeholder:text-gray-500 outline-none transition resize-none focus:border-[#5EB8C5] focus:ring-2 focus:ring-[#5EB8C5]/30 ${
                    errors.message ? 'border-red-500' : ''
                  }`}
                  disabled={isSubmitting}
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
                )}
              </div>

              {/* Success */}
              {submitStatus === 'success' && (
                <div className="rounded-md border border-green-500/40 bg-green-500/10 p-4 text-green-300">
                  ✓ Thank you! Your message has been sent successfully.
                </div>
              )}

              {/* Error */}
              {submitStatus === 'error' && (
                <div className="rounded-md border border-red-500/40 bg-red-500/10 p-4 text-red-300">
                  ✕ {errorMessage}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 h-12 w-full rounded-md bg-[#5EB8C5] font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Sending...
                  </span>
                ) : (
                  'Submit'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
