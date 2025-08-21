export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">H</span>
            </div>
            <span className="text-2xl font-bold text-dark">JCREA</span>
          </div>
          <h1 className="text-2xl font-bold text-dark mb-2">Join JCREA</h1>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Authentication Setup Required</h2>
            <p className="text-gray-600 mb-6">
              To enable registration, please follow the setup instructions in the CLERK_SETUP.md file.
            </p>
            <a
              href="/"
              className="btn-primary inline-block"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
