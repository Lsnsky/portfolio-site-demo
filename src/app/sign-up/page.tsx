import { SignUp } from "@clerk/nextjs";

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
        <SignUp 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-xl border-0 bg-white rounded-2xl",
              headerTitle: "text-2xl font-bold text-dark",
              headerSubtitle: "text-gray-600",
              formButtonPrimary: "bg-primary hover:bg-primary-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200",
              formFieldInput: "border border-gray-200 rounded-lg px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200",
              formFieldLabel: "text-gray-700 font-medium mb-2",
              footerActionLink: "text-primary hover:text-primary-dark font-medium",
              dividerLine: "bg-gray-200",
              dividerText: "text-gray-500 bg-white px-4",
            }
          }}
        />
      </div>
    </div>
  );
}
