// app/(Onboarding)/layout.tsx

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            Onboarding Header here
            <main>{children}</main>
            Onboarding Footer here
        </>
    );
}