import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "./login-page";
import { AuthProvider } from "../context";

/**
 * LoginPage Component
 *
 * Full-featured authentication page with email, Google OAuth, and phone OTP.
 * Used across all Skolist apps for unified authentication experience.
 */
const meta: Meta<typeof LoginPage> = {
  title: "Auth/LoginPage",
  component: LoginPage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <AuthProvider>
        <Story />
      </AuthProvider>
    ),
  ],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Page title displayed on the card",
    },
    description: {
      control: "text",
      description: "Description text below the title",
    },
    enabledMethods: {
      control: "object",
      description: "Array of enabled auth methods",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

/**
 * Default login page with all auth methods enabled
 */
export const Default: Story = {
  args: {},
};

/**
 * Custom branding for a specific app
 */
export const CustomBranding: Story = {
  args: {
    title: "Welcome to AI Tutor",
    description: "Sign in to continue your learning journey",
  },
};

/**
 * Email-only authentication
 */
export const EmailOnly: Story = {
  args: {
    title: "Email Sign In",
    description: "Use your email and password",
    enabledMethods: ["email"],
  },
};

/**
 * Google-only authentication
 */
export const GoogleOnly: Story = {
  args: {
    title: "Continue with Google",
    description: "Quick sign in with your Google account",
    enabledMethods: ["google"],
  },
};

/**
 * Phone-only authentication
 */
export const PhoneOnly: Story = {
  args: {
    title: "Phone Sign In",
    description: "Sign in with SMS verification",
    enabledMethods: ["phone"],
  },
};

/**
 * Email and Google (no phone)
 */
export const NoPhone: Story = {
  args: {
    title: "Sign In",
    description: "Choose your preferred method",
    enabledMethods: ["email", "google"],
  },
};
