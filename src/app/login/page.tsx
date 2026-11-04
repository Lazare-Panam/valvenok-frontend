'use client';

import LoginForm from './components/LoginForm';
import { AuthShell } from '@/src/app/Common/AuthShell';

export default function AuthPage() {
  return (
    <AuthShell title="Sign in to your account" subtitle="Welcome back to Valvenok.">
      <LoginForm />
    </AuthShell>
  );
}
