import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Button,
  Input,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Separator,
  Spinner,
  Mail,
  Lock,
  Phone,
  AlertCircle,
} from "@skolist/ui";
import { cn } from "@skolist/utils";
import { useAuth } from "../context";
import {
  emailLoginSchema,
  emailSignupSchema,
  phoneLoginSchema,
  otpVerificationSchema,
  type EmailLoginFormData,
  type EmailSignupFormData,
  type PhoneLoginFormData,
  type OtpVerificationFormData,
} from "../schemas";

// Google Icon SVG
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24">
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  );
}

interface LoginPageProps {
  /**
   * Title displayed on the login card
   */
  title?: string;
  /**
   * Description displayed below the title
   */
  description?: string;
  /**
   * Callback after successful login (optional - auth state is handled by context)
   */
  onSuccess?: () => void;
  /**
   * Additional class names for the container
   */
  className?: string;
  /**
   * Show only specific auth methods
   */
  enabledMethods?: ("email" | "google" | "phone")[];
}

export function LoginPage({
  title = "Welcome to Skolist",
  description = "Sign in to your account or create a new one",
  onSuccess,
  className,
  enabledMethods = ["email", "google", "phone"],
}: LoginPageProps) {
  const { signInWithEmail, signUpWithEmail, signInWithOAuth, signInWithPhone, verifyOtp } =
    useAuth();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [phoneStep, setPhoneStep] = useState<"phone" | "otp">("phone");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Email Sign In Form
  const emailSignInForm = useForm<EmailLoginFormData>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: { email: "", password: "" },
  });

  // Email Sign Up Form
  const emailSignUpForm = useForm<EmailSignupFormData>({
    resolver: zodResolver(emailSignupSchema),
    defaultValues: { email: "", password: "", confirmPassword: "" },
  });

  // Phone Form
  const phoneForm = useForm<PhoneLoginFormData>({
    resolver: zodResolver(phoneLoginSchema),
    defaultValues: { phone: "" },
  });

  // OTP Form
  const otpForm = useForm<OtpVerificationFormData>({
    resolver: zodResolver(otpVerificationSchema),
    defaultValues: { otp: "" },
  });

  const handleEmailSignIn = async (data: EmailLoginFormData) => {
    setIsLoading(true);
    setError(null);
    const { error } = await signInWithEmail(data.email, data.password);
    setIsLoading(false);
    if (error) {
      setError(error.message);
    } else {
      onSuccess?.();
    }
  };

  const handleEmailSignUp = async (data: EmailSignupFormData) => {
    setIsLoading(true);
    setError(null);
    const { error } = await signUpWithEmail(data.email, data.password);
    setIsLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setError(null);
      // Show success message for email confirmation
      setError("Check your email for a confirmation link!");
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    setError(null);
    const { error } = await signInWithOAuth("google");
    setIsLoading(false);
    if (error) {
      setError(error.message);
    }
  };

  const handlePhoneSubmit = async (data: PhoneLoginFormData) => {
    setIsLoading(true);
    setError(null);
    const { error } = await signInWithPhone(data.phone);
    setIsLoading(false);
    if (error) {
      setError(error.message);
    } else {
      setPhoneNumber(data.phone);
      setPhoneStep("otp");
    }
  };

  const handleOtpSubmit = async (data: OtpVerificationFormData) => {
    setIsLoading(true);
    setError(null);
    const { error } = await verifyOtp(phoneNumber, data.otp);
    setIsLoading(false);
    if (error) {
      setError(error.message);
    } else {
      onSuccess?.();
    }
  };

  const showEmail = enabledMethods.includes("email");
  const showGoogle = enabledMethods.includes("google");
  const showPhone = enabledMethods.includes("phone");

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center p-4",
        className
      )}
    >
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <div
              className={cn(
                "mb-4 flex items-center gap-2 rounded-md p-3 text-sm",
                error.includes("Check your email")
                  ? "bg-green-50 text-green-700"
                  : "bg-destructive/10 text-destructive"
              )}
            >
              <AlertCircle className="h-4 w-4" />
              {error}
            </div>
          )}

          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              {showEmail && <TabsTrigger value="email">Email</TabsTrigger>}
              {showGoogle && <TabsTrigger value="google">Google</TabsTrigger>}
              {showPhone && <TabsTrigger value="phone">Phone</TabsTrigger>}
            </TabsList>

            {/* Email Tab */}
            {showEmail && (
              <TabsContent value="email" className="space-y-4">
                <div className="flex gap-2">
                  <Button
                    variant={authMode === "signin" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setAuthMode("signin")}
                    type="button"
                  >
                    Sign In
                  </Button>
                  <Button
                    variant={authMode === "signup" ? "default" : "outline"}
                    className="flex-1"
                    onClick={() => setAuthMode("signup")}
                    type="button"
                  >
                    Sign Up
                  </Button>
                </div>

                {authMode === "signin" ? (
                  <div key="signin">
                    <Form {...emailSignInForm}>
                      <form
                        key="signin-form"
                        onSubmit={emailSignInForm.handleSubmit(handleEmailSignIn)}
                        className="space-y-4"
                      >
                      <FormField
                        control={emailSignInForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="you@example.com"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={emailSignInForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="password"
                                placeholder="••••••••"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner size="sm" /> : "Sign In"}
                      </Button>
                    </form>
                  </Form>
                  </div>
                ) : (
                  <div key="signup">
                  <Form {...emailSignUpForm}>
                    <form
                      key="signup-form"
                      onSubmit={emailSignUpForm.handleSubmit(handleEmailSignUp)}
                      className="space-y-4"
                    >
                      <FormField
                        control={emailSignUpForm.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <div className="relative">
                              <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="you@example.com"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={emailSignUpForm.control}
                        name="password"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Password</FormLabel>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="password"
                                placeholder="••••••••"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={emailSignUpForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm Password</FormLabel>
                            <div className="relative">
                              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                type="password"
                                placeholder="••••••••"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner size="sm" /> : "Create Account"}
                      </Button>
                    </form>
                  </Form>                  </div>                )}
              </TabsContent>
            )}

            {/* Google Tab */}
            {showGoogle && (
              <TabsContent value="google" className="space-y-4">
                <div className="text-center text-sm text-muted-foreground">
                  Sign in with your Google account for quick access
                </div>
                <Separator />
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner size="sm" />
                  ) : (
                    <>
                      <GoogleIcon className="mr-2 h-4 w-4" />
                      Continue with Google
                    </>
                  )}
                </Button>
              </TabsContent>
            )}

            {/* Phone Tab */}
            {showPhone && (
              <TabsContent value="phone" className="space-y-4">
                {phoneStep === "phone" ? (
                  <Form {...phoneForm}>
                    <form
                      onSubmit={phoneForm.handleSubmit(handlePhoneSubmit)}
                      className="space-y-4"
                    >
                      <FormField
                        control={phoneForm.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <div className="relative">
                              <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                              <Input
                                placeholder="+1234567890"
                                className="pl-9"
                                {...field}
                              />
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner size="sm" /> : "Send OTP"}
                      </Button>
                    </form>
                  </Form>
                ) : (
                  <Form {...otpForm}>
                    <form
                      onSubmit={otpForm.handleSubmit(handleOtpSubmit)}
                      className="space-y-4"
                    >
                      <div className="text-center text-sm text-muted-foreground">
                        Enter the 6-digit code sent to {phoneNumber}
                      </div>
                      <FormField
                        control={otpForm.control}
                        name="otp"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Verification Code</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="000000"
                                maxLength={6}
                                className="text-center text-lg tracking-widest"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                      >
                        {isLoading ? <Spinner size="sm" /> : "Verify"}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="w-full"
                        onClick={() => setPhoneStep("phone")}
                      >
                        Change phone number
                      </Button>
                    </form>
                  </Form>
                )}
              </TabsContent>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
