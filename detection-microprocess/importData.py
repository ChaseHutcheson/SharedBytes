from roboflow import Roboflow
rf = Roboflow(api_key="kWE4VRniUTVdxUVOpZpW")
project = rf.workspace("workspace-uda5x").project("yhbujngkmvhjgbukm")
version = project.version(2)
dataset = version.download("yolov5")
