import os, os.path

listOfFiles = []

for (dirname, dirs, files) in os.walk('.'):
   for filename in files:
		if filename.endswith('.jpg'):
			listOfFiles.append(filename)
		elif filename.endswith('.gif'):
			listOfFiles.append(filename)

name = ""
input(name);
writer = open(name, "w")
count = -1
for file in listOfFiles:
	count += 1
	print(count)
	if count < len(listOfFiles):
		writer.write(file + "\n")
	else:
		writer.write(file)
writer.close()