export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verifikasi Email Anda</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Verifikasi Email Anda</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Hello,</p>
    <p>Terimakasih telah mendaftarkan akun, berikut adalah kode verifikasi:</p>
    <div style="text-align: center; margin: 30px 0;">
      <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
    </div>
    <p>Masukkan kode ini pada halaman registrasi yang memerlukan kode tersebut untuk memverifikasi email.</p>
    <p>Kode ini akan berakhir dalam 15 menit</p>
    <p>Jika bukan kamu yang meminta pendaftaran pada website terkait, abaikan saja email ini.</p>
    <p>Best regards,<br>Your App Team</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Ini adalah pesan otomatis, tidak perlu untuk membalas pesan ini.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Password Berhasil dilakukan</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Reset Password Berhasil</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Halo,</p>
    <p>Kami mengirim ini untuk mengkonfirmasi bahwa anda telah berhasil mereset kata sandi.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #4CAF50; color: white; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p>Jika bukan kamu yang meminta reset password, maka segera hubungi kami.</p>
    <p>For security reasons, we recommend that you:</p>
    <ul>
      <li>Gunakan password yang kuat dan unik</li>
      <li>Jika memungkinkan, gunakan juga kemanan tambahan 2fa</li>
      <li>Hindari membuat password yang sama antar semua akun anda</li>
    </ul>
    <p>Terimakasih telah membantu kami mengamankan akun anda.</p>
    <p>Hormat kami,<br>Yafizham</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Ini adalah pesan otomatis, tidak diperlukan untuk membalas.</p>
  </div>
</body>
</html>
`;

export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Password Anda</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
    <h1 style="color: white; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
    <p>Halo,</p>
    <p>Kami telah menerima permintaan reset kata sandi. jika bukan anda yang meminta, hanya hiraukan pesan ini.</p>
    <p>Untuk mereset kata sandi anda, klik tombol di bawah ini:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{resetURL}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold;">Reset Kata Sandi</a>
    </div>
    <p>This link will expire in 1 hour for security reasons.</p>
    <p>Hormat kami,<br>Yafizham</p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
    <p>Ini adalah pesan otomatis, tidak perlu untuk membalas pesan ini.</p>
  </div>
</body>
</html>
`;