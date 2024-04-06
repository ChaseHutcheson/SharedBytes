# importing libraries
import numpy, cv2, time

# capturing video in real time
cap = cv2.VideoCapture(1)

# reading frames sequentially
ret, frame1 = cap.read()
ret, frame2 = cap.read()

def objRecognition(frame):
    print(str(frame))

while cap.isOpened():

    # difference between the frames
    diff = cv2.absdiff(frame1, frame2)
    diff_gray = cv2.cvtColor(diff, cv2.COLOR_BGR2GRAY)
    blur = cv2.GaussianBlur(diff_gray, (5, 5), 0)
    _, thresh = cv2.threshold(blur, 20, 255, cv2.THRESH_BINARY)
    dilated = cv2.dilate(thresh, None, iterations=3)
    contours, _ = cv2.findContours(
        dilated, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)

    for contour in contours:
        (x, y, w, h) = cv2.boundingRect(contour)
        if cv2.contourArea(contour) < 30000:
            continue
        time.sleep(5)
        objRecognition(frame2)
    frame1 = frame2
    ret, frame2 = cap.read()

    if cv2.waitKey(50) == 27:
        break

cap.release()
cv2.destroyAllWindows()

