import { Layout } from "@/components/layout"

export default async function GSDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <Layout>{children}</Layout>
}
