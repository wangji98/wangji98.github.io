import os

def rename_images(folder_path):
    file_list = os.listdir(folder_path)
    file_list = [file for file in file_list if file.endswith('.jpg')]

    for i, file_name in enumerate(file_list):
        new_name = str(i + 1) + '.jpg'
        file_path = os.path.join(folder_path, file_name)
        new_path = os.path.join(folder_path, new_name)
        os.replace(file_path, new_path)

folder_path = os.getcwd()
rename_images(folder_path)