🌸 BloomCart — Flower Shop E-Commerce Platform

BloomCart is a full-stack flower shop application that enables customers to browse, customize, and order flowers online, while providing administrators with tools to manage products, orders, and deliveries.

🚀 Features
🛍️ Customer
Browse flowers by category
Search & filter products
Add to cart & checkout
Delivery scheduling
User authentication
Order tracking
🧑‍💼 Admin
Product management (CRUD)
Order management
Customer tracking
Sales overview
🧱 Tech Stack
Frontend  : Next.js + Tailwind CSS
Backend   : Node.js + Express
Database  : MongoDB
Auth      : JWT / Firebase Auth
Payments  : Paystack / Flutterwave

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/anointedthedeveloper/bloomcart.git
cd bloomcart
2. Install Dependencies
Frontend
cd client
npm install
Backend
cd ../server
npm install
3. Environment Variables

Create a .env file in the server folder:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

PAYSTACK_SECRET=your_paystack_key
FLUTTERWAVE_SECRET=your_flutterwave_key
4. Run the Application
Start Backend
cd server
npm run dev
Start Frontend
cd client
npm run dev
🔌 API Endpoints
Auth
POST   /api/auth/register
POST   /api/auth/login
Products
GET    /api/products
GET    /api/products/:id
POST   /api/products       # Admin
PUT    /api/products/:id   # Admin
DELETE /api/products/:id   # Admin
Orders
POST   /api/orders
GET    /api/orders/user
GET    /api/orders         # Admin
PUT    /api/orders/:id
🧠 Future Improvements
🌼 Custom bouquet builder
📱 Progressive Web App (PWA)
📍 Google Maps delivery tracking
🤖 AI-based flower recommendations
💬 WhatsApp order integration
🛠️ Scripts
# Frontend
npm run dev
npm run build

# Backend
npm run dev
npm start
🤝 Contributing
# Fork the project
# Create your feature branch
git checkout -b feature/new-feature

# Commit your changes
git commit -m "Add new feature"

# Push to branch
git push origin feature/new-feature

# Open a Pull Request
📄 License

This project is licensed under the MIT License.

👤 Author
Name: Anointed the developer
GitHub: https://github.com/anointedthedeveloper
⭐ Support

If you like this project, give it a star on GitHub!
