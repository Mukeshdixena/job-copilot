"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useAuth } from "@/lib/auth/AuthProvider";
import { ApiClientError } from "@/lib/api/client";

const schema = z
  .object({
    email: z.string().email("Enter a valid email"),
    password: z.string().min(8, "At least 8 characters"),
    confirmPassword: z.string().min(1, "Confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type FormValues = z.infer<typeof schema>;

const inputStyle: React.CSSProperties = {
  width: "100%",
  fontSize: 13,
  padding: "9px 11px",
  borderRadius: 7,
  border: "1px solid #E3E8EF",
  background: "#fff",
  color: "#0F172A",
};

export default function RegisterPage() {
  const router = useRouter();
  const { register: registerAccount } = useAuth();
  const [serverError, setServerError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    setServerError(null);
    try {
      await registerAccount(values.email, values.password);
      router.push("/dashboard");
    } catch (err) {
      setServerError(
        err instanceof ApiClientError ? err.message : "Could not create your account. Try again."
      );
    }
  };

  return (
    <div style={{ background: "#fff", border: "1px solid #E3E8EF", borderRadius: 10, padding: 22 }}>
      <h1 style={{ margin: 0, fontSize: 17, fontWeight: 640, color: "#0F172A", letterSpacing: "-.015em" }}>
        Create your account
      </h1>
      <div style={{ fontSize: 12.5, color: "#64748B", marginTop: 4, marginBottom: 18 }}>
        Start building your Java Spring Boot career profile.
      </div>

      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "grid", gap: 12 }}>
        <div style={{ display: "grid", gap: 5 }}>
          <label style={{ fontSize: 11.5, fontWeight: 560, color: "#334155" }}>Email</label>
          <input type="email" autoComplete="email" style={inputStyle} {...register("email")} />
          {errors.email && (
            <span style={{ fontSize: 11, color: "#A3170F" }}>{errors.email.message}</span>
          )}
        </div>
        <div style={{ display: "grid", gap: 5 }}>
          <label style={{ fontSize: 11.5, fontWeight: 560, color: "#334155" }}>Password</label>
          <input
            type="password"
            autoComplete="new-password"
            style={inputStyle}
            {...register("password")}
          />
          {errors.password && (
            <span style={{ fontSize: 11, color: "#A3170F" }}>{errors.password.message}</span>
          )}
        </div>
        <div style={{ display: "grid", gap: 5 }}>
          <label style={{ fontSize: 11.5, fontWeight: 560, color: "#334155" }}>Confirm password</label>
          <input
            type="password"
            autoComplete="new-password"
            style={inputStyle}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span style={{ fontSize: 11, color: "#A3170F" }}>{errors.confirmPassword.message}</span>
          )}
        </div>

        {serverError && (
          <div
            style={{
              fontSize: 12,
              color: "#A3170F",
              background: "#FEF2F2",
              border: "1px solid #FCA5A5",
              borderRadius: 7,
              padding: "8px 10px",
            }}
          >
            {serverError}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            marginTop: 4,
            fontSize: 13,
            fontWeight: 620,
            padding: "10px",
            borderRadius: 7,
            border: "1px solid #2F5BEA",
            background: "#2F5BEA",
            color: "#fff",
            cursor: isSubmitting ? "default" : "pointer",
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? "Creating account…" : "Create account"}
        </button>
      </form>

      <div style={{ textAlign: "center", fontSize: 12.5, color: "#64748B", marginTop: 16 }}>
        Already have an account?{" "}
        <Link href="/login" style={{ color: "#2F5BEA", fontWeight: 560 }}>
          Sign in
        </Link>
      </div>
    </div>
  );
}
