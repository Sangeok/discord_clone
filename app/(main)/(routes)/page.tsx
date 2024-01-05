import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <p>hihi</p>
      
      {/* 로그아웃 버튼 */}
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}
