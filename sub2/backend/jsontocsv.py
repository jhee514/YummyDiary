import csv
import json

# input_file_name = "../../data/data.json"
# output_file_name = "data.csv"
# with open(input_file_name, "r", encoding="utf-8", newline="") as input_file, open(output_file_name, "w", encoding="utf-8", newline="") as output_file:
    
#     csvwriter = csv.writer(output_file)
    
#     data = []
#     for row in input_file:
#         datum = json.loads(row)
#         data.append(datum)
        
#     csvwriter.writerow(row[0].keys())
#     for line in data:
#         csvwriter.writerow(line.values())

file_input = "../../data/data.json"
file_output = "data.csv"
inputFile = open(file_input) #open json file
outputFile = open(file_output, 'w') #load csv file
data = json.load(inputFile) #load json content
inputFile.close() #close the input file
output = csv.writer(outputFile) #create a csv.write
output.writerow(data[0].keys())  # header row
for row in data:
    output.writerow(row.values()) #values row