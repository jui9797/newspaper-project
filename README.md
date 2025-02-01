# TRENDIFY(newspaper aggregation website)

## Overview
This is a full-stack Newspaper Aggregation Website where users can read, publish, and manage articles. Admins have exclusive controls to oversee the platform, including approving or declining articles, managing users, and setting premium features. The project includes a user-friendly interface and ensures robust functionality with authentication, secure routes, and responsive design.

---

## Features

1. **Home Page**
   - Trending Articles slider (based on view count).
   - Publisher list with logos.
   - User statistics (normal vs premium).
   - Subscription plans.
   - Additional unique sections to enhance user engagement.

2. **User Functionality**
   - **Add Articles**: Users can submit articles with titles, images, tags, and descriptions. Articles require admin approval.
   - **My Articles**: View, edit, and delete personal articles. See status updates (approved, pending, declined).
   - **Profile Page**: Update personal information.
   - **Premium Articles**: Exclusive access to premium articles after subscription.

3. **Admin Functionality**
   - **Dashboard**: View users, articles, and publishers in dynamic charts (e.g., pie, bar).
   - **Manage Articles**: Approve, decline (with reasons), delete, or mark articles as premium.
   - **Manage Users**: Promote users to admin.
   - **Add Publishers**: Add new publishers with names and logos.

4. **Authentication**
   - Email/password registration and login.
   - Social login (e.g., Google).
   - Password validation with detailed error messages.
   - JWT-based private route protection.

5. **Enhanced User Experience**
   - Responsive design for mobile, tablet, and desktop.
   - Toast notifications for all CRUD operations and authentication events.
   - Dynamic loaders for better API call handling.
   - Subscription modal popup on homepage after 10 seconds.

6. **Other Features**
   - 404 Page.
   - Search and filter articles by publisher, tags, and title.
   - Pagination for admin dashboards.
   - Secure environment variables for sensitive configurations.

---

## Tech Stack

### Frontend
- React.js
- React Router
- React Select
- React Query (TanStack Query)
- React CountUp
- GSAP (for animations)
- React Google Charts
- Firebase Authentication
- Tailwind CSS (or any other component library except DaisyUI)

### Backend
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Tokens (JWT) for authentication

### Image Hosting
- imgBB or Cloudinary

---

## Installation

### Prerequisites
- Node.js installed
- MongoDB Atlas account or local MongoDB setup

### Steps

1. Clone the repository:
   ```bash
   git clone <https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-jui9797>
   git clone <https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-jui9797>
   ```

2. Navigate to client and server directories:
   ```bash
   cd client
   cd server
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   - **Client**: Add Firebase config in `.env`.
   - **Server**: Add MongoDB URI and JWT secret in `.env`.

5. Start the server and client:
   ```bash
   npm start # for both client and server
   ```

---

## Admin Credentials

- **Email**: `jasmine@gmail.com`
- **Password**: `asdA12#`

---

## Live Site
[https://trendify-57be1.web.app/]

---

## GitHub Repositories

- **Frontend**: [https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-jui9797](#)
- **Backend**: [https://github.com/Programming-Hero-Web-Course4/b10a12-server-side-jui9797](#)

---

## Features List (10 Points)

1. Secure login with email/password and social login options.
2. Responsive design for mobile, tablet, and desktop.
3. Dynamic trending articles slider on the home page.
4. CRUD operations with toast notifications.
5. Role-based functionalities for users and admins.
6. JWT-based private route protection with persistent login state.
7. Article filtering and searching by tags, publisher, and title.
8. Subscription management with automated premium status handling.
9. Dynamic charts on the admin dashboard.
10. Pagination for efficient data handling in admin views.

---

## Contribution
Feel free to fork the repository and make contributions. For significant changes, open an issue to discuss your proposed modifications.

---

## License
This project is licensed under the MIT License.
 
