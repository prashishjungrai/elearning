import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer>
      <div className="border border-[#0000000e]" />
      <br />
      <div className="w-[95%] 800px:w-full 800px:max-w-[85%] mx-auto px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* About Section */}
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black">About</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/about"
                  className="text-base text-black"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/policy"
                  className="text-base text-black"
                >
   a               Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-base text-black"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black ">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/courses"
                  className="text-base text-black"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-base text-black"
                >
                  My Account
                </Link>
              </li>
              <li>
                <Link
                  href="/course-dashboard"
                  className="text-base text-black"
                >
                  Course Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="space-y-3">
            <h3 className="text-[20px] font-[600] text-black">Social Links</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://youtube.com"
                  className="text-base text-black"
                >
                  YouTube
                </Link>
              </li>
              <li>
                <Link
                  href="https://instagram.com"
                  className="text-base text-black"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-[20px] font-[600] text-black ">Contact Info</h3>
            <p className="text-base text-black">
              Call Us: +977 9843523401
                      
            </p>
            <p className="text-base text-black ">
              Address: Tinkune, Kathmandu-Nepal
            </p>
            <p className="text-base text-black">
              Mail Us: hello@elearning.com
            </p>
          </div>
        </div>

        <br />
        <p className="text-center text-black">
          Copyright © 2023 Elearning | All Rights Reserved
        </p>
      </div>
      <br />
    </footer>
  )
}

export default Footer
