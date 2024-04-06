#!pip install roboflow

from roboflow import Roboflow
rf = Roboflow(api_key="fz1COejid226SE3nf49I")
project = rf.workspace("hungarai").project("foodrecv2")
version = project.version(1)
dataset = version.download("yolov5", "./data")

