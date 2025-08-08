import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BasicAvatar() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Basic Avatar</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center items-center gap-2">
        <Avatar>
          <AvatarImage src="/images/avatars/default-avatar.svg" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="#" alt="User" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </CardContent>
    </Card>
  )
}
