# 3SA03: React - Hangman
นายสุทธิรัก มัธยวีรเกียรติ 6210110383 Section 01

## [Commit #1 Hangman Prototype](https://github.com/suttirak-mattaya/react-3sa03-card_game/commit/9265460e46ecdbea76b9cfaa8101af91df84d395)
จาก Game Logic ข้อ 6 มีการจัดการระบบไฟล์ใหม่โดย
- แปลง WordCard เป็น Key แสดงชุดคีย์บอร์ด
- CharacterCard เป็น ปุ่มตัวอักษร
- สร้าง Monitor กับ CharDisplay เพื่อแสดงผลข้อความที่ให้ผู้เล่นทายหรือทายถูก
- สร้าง Scoreboard แสดงสถานะ (ยังไม่ได้ใช้)

เริ่มต้น App จะสุ่มข้อความใน word list เตรียมไว้ก่อน และมีการเตรียม string สำหรับการทายโดยจะมีการใช้ useRef ใน Monitor และ Monitor จะสั่งให้ CharDisplay แยกอักขระ
แล้วเมื่อมีการกดปุ่มใน CharacterCard จะมีการส่ง activitionHandler ไปยัง Key และ Key จะส่ง activationHandler ไปยัง App เพื่อประมวลผลการทายว่ามีตัวอักษรที่กดในคำที่เตรียมไว้มั้ย แล้วupdate ข้อความ guess
โดยจะมีการกำหนดจำนวนครั้งที่พลาด 10ครั้ง ถ้าพลาดหมด จะมี alert เตือนว่า You lose แต่ถ้าเดาถูกจะเป็น You win

## [Commit #2 Attempt Indicator and Manage UI](https://github.com/suttirak-mattaya/react-3sa03-card_game/commit/f01421c84df52818d7dad06549a3ae730df29b16)
ส่ง ref ของ attempt ไปยัง Scoreboard ผ่าน useRef และ useEffect แล้ว Scoreboard จะประมวลผลโดยการหารูปภาพแสดง state แต่ละ state เมื่อพลาดออกมาแสดง
และมีการ update ไฟล์ css เพื่อตกแต่ง และสร้าง Usage (ยังไม่ได้ใช้)

## [Commit #3 When win or lose, game reload](https://github.com/suttirak-mattaya/react-3sa03-card_game/commit/bc44ab5187aa953b0ec75d1fdbef5820166fdc9a)
เพิ่มคำสั่ง window.location.reload() เพื่อ refresh หน้าเว็บเพื่อเล่นเกมใหม่หลังจบเกมแล้ว และมีการเพิ่มให้ guess สามารถรองรับเครื่องหมายได้
ใน Usage จะเป็น logo React และบอกจำนวนครั้งที่เหลือที่พลาดได้ และเวลาเล่น

## [Commit #4 Use reset mechanics instead of location reload](https://github.com/suttirak-mattaya/react-3sa03-card_game/commit/8aaa89e17ac42eb0c4f7e4553c7783ebb910ceff)
เปลี่ยนแปลงระบบให้เป็นการสุ่มคำใหม่ และ reset guess ทำให้ที่ Monitor มีการอัพเดตอัตโนมัติ มีการเพิ่ม useRef จาก App -> Key และ Key -> CharacterCard เพื่อบอก CharacterCard ว่าเกมจบแล้ว ให้ reset ปุ่ม
เปลี่ยนแปลง Usage ลบระบบแสดงเวลา แล้วเปลี่ยนเป็นระบบ Win Streak ตรวจจำนวนครั้งที่ชนะติดต่อกัน

## [Commit #5 reveal answer when lost](https://github.com/suttirak-mattaya/react-3sa03-card_game/commit/8c6ab14b4422444897dc8ce90ff5e35828f12ae1)
ทำให้เมื่อแพ้จะเฉลยคำตอบก่อนขึ้นข้อความเตือน โดย set guess เป็นข้อความที่เตรียมไว้เลย
