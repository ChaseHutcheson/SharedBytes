#!pip install roboflow

from roboflow import Roboflow
rf = Roboflow(api_key="fz1COejid226SE3nf49I")
project = rf.workspace("hungarai").project("food-recognition-q6fph")
version = project.version(4)
dataset = version.download("yolov5")

