import React from 'react';

const OnlineManualPage = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-8">
      <h2 className="text-3xl font-bold text-red-800 dark:text-red-400 mb-6 border-b-2 border-red-200 dark:border-red-700 pb-2">Online Manual</h2>

      <div className="prose max-w-none text-gray-700 dark:text-gray-300 leading-relaxed">
        <h3>Welcome to the Pioneer Elite Academy Website Manual!</h3>
        <p>
          This manual provides a comprehensive guide to navigating and utilizing the various features of the Pioneer Elite Academy website. Our goal is to make your online experience as smooth and informative as possible.
        </p>

        <h4>1. Navigating the Website</h4>
        <p>
          The website is organized into several key sections, accessible via the navigation bar at the top of every page.
        </p>
        <ul>
          <li><strong>Home:</strong> The landing page, offering a general overview of the school, a slideshow of school life, quick links to important sections, and information about our online management system.</li>
          <li><strong>About:</strong> Learn about our school's vision, mission, history, key statistics (classrooms, enrollment, staff), and a message from the Principal.</li>
          <li><strong>Management:</strong> Information about the school's leadership and administrative staff.</li>
          <li><strong>The School:</strong> Comprehensive details about our academic curriculum, subjects, class levels, and student life activities.</li>
          <li><strong>Chapel:</strong> Information regarding our spiritual programs and values.</li>
          <li><strong>Photo Gallery:</strong> Explore photos and videos from school events and view our comprehensive event calendar, including alumni history.</li>
          <li><strong>Contact:</strong> Find our location on a map, postal address, email, and various contact numbers for different departments, along with links to our social media pages.</li>
        </ul>

        <h4>2. Online School Management System (OSMS)</h4>
        <p>
          Pioneer Elite Academy utilizes a robust Online School Management System (OSMS) to streamline various school activities. This system provides dedicated portals for parents and students.
        </p>
        <ul>
          <li><strong>Accessing the Web Login Portal:</strong> Click the "Access Web Login Portal" button on the Home page to go to the OSMS web login page.</li>
          <li><strong>Downloading the Mobile App:</strong> For a convenient mobile experience, you can download our official app from the Google Play Store by clicking the "Download Mobile App" button on the Home page.</li>
          <li><strong>Login Credentials (Web Portal):</strong> If you need your login credentials for the *web portal* or assistance with your web account, please contact our help center directly:
            <ul>
              <li><strong>WhatsApp Help:</strong> Click the "WhatsApp Help" button to send a pre-filled message to our support team.</li>
              <li><strong>Call Help:</strong> Click the "Call Help" button to directly call our support team.</li>
            </ul>
            Please note that for security reasons, passwords for the web portal are not sent automatically. Our help center staff will assist you securely.
          </li>
          <li><strong>Login Credentials (Mobile App):</strong> The mobile app offers a self-service login option for parents, allowing for easier access to their accounts.</li>
          <li><strong>Parent Portal:</strong> Parents can view fee balances, check examination results, and receive important termly notifications from the school.</li>
          <li><strong>Student Portal:</strong> Students can access their academic information, class schedules, and other relevant school data.</li>
        </ul>

        <h4>3. Important Information</h4>
        <ul>
          <li><strong>Fee Structure:</strong> The detailed fee structure can be downloaded from the "Admissions" page.</li>
          <li><strong>Google Form for Applications:</strong> New student applications are processed through a secure Google Form, linked on the "Admissions" page.</li>
          <li><strong>Contacting Departments:</strong> For specific inquiries, use the direct call or WhatsApp options listed under "Contact Us" for Administration, Finance, Academics, and General Help.</li>
        </ul>

        <p>
          We hope this manual helps you make the most of the Pioneer Elite Academy website. For any further assistance, please do not hesitate to contact us.
        </p>
      </div>
    </section>
  );
};

export default OnlineManualPage;
