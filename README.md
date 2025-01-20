# HSN Tower (Building Management Website)

### Client-Side Repository  

**HSN Tower** is a full-stack web application for managing a single building. Users interested in renting apartments can view detailed apartment information and request membership in the building. Admins have the ability to accept or reject these membership requests. Members can pay monthly rent using the application and stay informed about announcements posted by the admin.  

---

## Live Site URL  
[Visit HSN Tower](https://hsn-tower-40.netlify.app/)  

---

## Key Features  

- **Role-Based Application:**  
  - Includes three roles: Admin, Member, and User.  
  - Admins cannot access Members' APIs or routes.  
  - Members cannot access Admin APIs or routes.  
  - Users cannot access APIs or routes meant for Admins or Members.  

- **Secure Payment System:**  
  - Integrated with Stripe for secure online payments.  
  - Members can apply coupons to receive discounts during payment.  

- **JWT Token Security:**  
  - Upon login or sign-up, a JWT token is stored in the user's browser's local storage.  
  - The token is removed upon logout.  
  - Users cannot access private routes or APIs without a valid JWT token. Any attempt to bypass this results in an automatic logout.  

- **Access Control:**  
  - Users cannot access other users' data, even with a valid JWT token.  
  - Each user is provided with an individual token stored locally.  
  - Explicit attempts to access others' data result in automatic logout.  

- **Firebase Authentication:**  
  - Authentication is implemented using Firebase.  
  - API authorization is secured through JWT.  

- **Filtering Functionality:**  
  - Users can filter apartment data based on minimum and maximum prices.  

---

## NPM Packages Used in This Project  

- **Payment Integration:**  
  - `@stripe/react-stripe-js`: `^3.1.1`  
  - `@stripe/stripe-js`: `^5.5.0`  

- **State Management & Data Fetching:**  
  - `@tanstack/react-query`: `^5.64.1`  
  - `axios`: `^1.7.9`  

- **Authentication & Storage:**  
  - `firebase`: `^11.1.0`  
  - `localforage`: `^1.10.0`  

- **Utilities:**  
  - `match-sorter`: `^8.0.0`  
  - `moment`: `^2.30.1`  

- **React & Related Packages:**  
  - `react`: `^18.3.1`  
  - `react-dom`: `^18.3.1`  
  - `react-router-dom`: `^7.1.1`  

- **UI Enhancements:**  
  - `react-copy-to-clipboard`: `^5.1.0`  
  - `react-hot-toast`: `^2.5.1`  
  - `react-icons`: `^5.4.0`  
  - `react-multi-carousel`: `^2.8.5`  
  - `sweetalert2`: `^11.15.10`  
  - `swiper`: `^11.2.1`  
