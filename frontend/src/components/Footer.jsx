import React from 'react'

const Footer = () => {
  return (
    <div>

        <footer className="bg-amber-50 py-6 border-t border-green-200">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-center text-green-900">
                    &copy; {new Date().getFullYear()} GramLink. All rights reserved.
                </p>
            </div>
        </footer>

    </div>
  )
}

export default Footer