from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# Load menu data
def load_menu():
    with open("menu.json", "r") as file:
        return json.load(file)

# Save menu data
def save_menu(data):
    with open("menu.json", "w") as file:
        json.dump(data, file, indent=4)

# API route to get menu
@app.route("/menu", methods=["GET"])
def get_menu():
    return jsonify(load_menu())

# API route to update menu (Admin)
@app.route("/menu", methods=["POST"])
def update_menu():
    new_menu = request.json  # Get JSON from request
    save_menu(new_menu)  # Save new menu data
    return jsonify({"message": "Menu updated successfully!"})

if __name__ == "__main__":
    app.run(debug=True)
