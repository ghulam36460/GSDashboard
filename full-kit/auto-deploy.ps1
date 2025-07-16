$process = Start-Process -FilePath "cmd" -ArgumentList "/c", "echo . | vercel" -PassThru -Wait
$process.WaitForExit()
