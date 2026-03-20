// app/(auth)/layout.tsx

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            Auth Header here
            <main>{children}</main>
            Auth Footer here
        </>
    );
}