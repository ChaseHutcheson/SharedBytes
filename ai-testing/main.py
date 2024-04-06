# importing libraries
import numpy, cv2, time, os
from PIL import Image
import torch

# capturing video in real time
cap = cv2.VideoCapture(1)

# reading frames sequentially
ret, frame1 = cap.read()
ret, frame2 = cap.read()

def objRecognition():
    # os.system("python ./ai-testing/yolov5/detect.py --weights ai-testing\\yolov5\\runs\\train\exp6\\weights\\best.pt --source ./ai-testing/curImg.png")
    # print("1")



    # Model
    model = torch.hub.load(r'./ai-testing/yolov5/runs/train/exp6/weights/best.pt', 'best', source='local')

    # Image
    im = cv2.imread(".\\ai-testing\\curImg.png")

    # Inference
    results = model(im)
    print(results)


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
        cv2.imwrite("ai-testing/curImg.png", frame2)
        objRecognition()
    frame1 = frame2
    ret, frame2 = cap.read()

    # if cv2.waitKey(50) == 27:
    #     break

cap.release()
cv2.destroyAllWindows()

