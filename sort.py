import re

def sort_and_save(data, medal_file="medals.txt"):
    medals = []
    items = {}
    
    for line in data.splitlines():
        if "=" in line:
            key, value = map(str.strip, line.split("="))
            value = value.rstrip(";")
            
            if re.search(r"medal|platinum|gold|silver|bronze|brilliant", key, re.IGNORECASE):
                medals.append(f"{key} = {value};")
            else:
                match = re.match(r"([A-Za-z]+)", key)  # Берем только название оружия без скина
                if match:
                    category = match.group(1)
                    if category not in items:
                        items[category] = []
                    items[category].append(f"{key} = {value};")
    
    # Сохранение медалей
    with open(medal_file, "w", encoding="utf-8") as f:
        f.write("\n".join(medals) + "\n")
    
    # Сохранение остальных предметов
    for category, lines in items.items():
        with open(f"{category}.txt", "w", encoding="utf-8") as f:
            f.write("\n".join(lines) + "\n")

# Чтение данных из файла
def read_data_from_file(filename):
    with open(filename, "r", encoding="utf-8") as f:
        return f.read()

# Загружаем данные из файла
input_filename = "skins.txt"  # Укажите нужное имя файла

data = read_data_from_file(input_filename)

sort_and_save(data)
