import pyautogui, pyperclip, random, time
print("Tool Spam 1.0")
msg = ["Quá tuyệt với luôn bạn Bi",
"Học mãi mãi mãi đỉnh",
"Chúc bạn Bi được giải nè",
"Cố gắng học tốt hơn nữa nhé :P",
"Tự hào học mãi",
"Quá tuyệt vời",
"Goodjob bạn Bi",
"Bạn Bi mãi đỉnh",
"Cố gắng hơn nữa nào :D",
"Học mãi vip pro :P",
"Tự hào học mãi mãi...",
"Học học nữa học mãi! :D",
"Cố gắng nhiều hơn nữa nhé :)",
"Mãi mãi tự hào bạn Bi",
"Mãi mãi tự hào học mãi",
"Bạn Như Thuỷ quá giỏi",
"Cố gắng nhiều hơn nhé Như Thuỷ",
"Mọi người luôn ủng hộ Bạn Như Thuỷ",
"Bạn Như Thuỷ nhất định đạt giải nhé :P",
"Học mãi luôn đồng hành cùng Như Thuỷ :D",
"Hãy luôn là người dẫn đầu :P",
"Học mãi nền tảng giáo dục trực tuyến hàng đầu Việt Nam!",
"Hãy cùng học nào :P",
"Cùng nhau cố gắng :))",
"Không bao giờ bỏ cuộc :))",
"Bạn Thuỷ là số 1 :P",
"Hãy luôn luôn top nhé",
"Lên top cùng học mãi nào :D",
"Lấy giải thưởng của học mãi nào bạn ơi!",
"Học mãi, mãi học...",
"Cùng đồng hành và phát triển cùng học mãi",
"Mọi người đều ủng hộ bạn Như Thuỷ",
"Bạn Bi là số 1",
"Bạn Bi và bạn Mèo vào like comment của anh 2 nào kaka",
"Bé Bi vip pro :))",
"Tiến bước cùng học mãi :D",
"Bức phá bản thân cùng học mãi",
"Học Mãi tự hào bạn Như Thuỷ",
"Cùng chơi, cùng học, cùng vui :D",
"Tất cả chỉ là thử thách :D",
"Bi siêu cấp zô địch :P",
"Học mãi siêu cấp, vô địch :D",
"Trao dồi kiến thức cùng học mãi",
"Bạn Bi cố gắng hơn nữa nhé :))",
"Học mãi hỗ trợ bạn Thuỷ nhiều hơn nhé :D",
"Cùng phát triển cùng học mãi!",
"Quyết không lười học!",
"Học tốt là có thưởng cho bạn Bi",
"Thấy anh 2 comment pro ko Bi? :))",
"Siêu cấp vô địch chưa? kaka"]

m = float(input("Nhập thời gian delay: "))

print("Chuẩn bị")
#Đếm ngược 5 giây
for i in range(5,0,-1):
	print(i,end="...",flush='True')
	time.sleep(1)
print("Bắt đầu")

#SPAM
for i in msg:
	pyperclip.copy(i)
	pyautogui.hotkey("command","v")
	pyautogui.press("enter")
	time.sleep(m) #Delay