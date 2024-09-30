# from selenium import webdriver
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys

# def test_login():
#     driver = webdriver.Chrome(executable_path='C:\Users\user\Downloads\chrome-win64\chrome-win64\chrome.exe')
#     driver.get("http://localhost:3000")

#     # Find the email and password fields
#     email_field = driver.find_element(By.ID, "email")
#     password_field = driver.find_element(By.ID, "password")

#     # Enter valid credentials
#     email_field.send_keys("your_email@example.com")
#     password_field.send_keys("your_password")

#     # Submit the login form
#     password_field.send_keys(Keys.RETURN)

#     # Assert successful login
#     assert "Welcome" in driver.title

#     # Find the logout button
#     logout_button = driver.find_element(By.ID, "logout")

#     # Click the logout button
#     logout_button.click()

#     # Assert successful logout
#     assert "Login" in driver.title

#     driver.quit()

import sys
print(f"Python version: {sys.version}")
print(f"Python executable: {sys.executable}")

try:
    from selenium import webdriver
    from selenium.webdriver.chrome.service import Service
    from selenium.webdriver.chrome.options import Options
    from selenium.webdriver.common.by import By
    from selenium.webdriver.common.keys import Keys
    from selenium.webdriver.support.ui import WebDriverWait
    from selenium.webdriver.support import expected_conditions as EC
    from webdriver_manager.chrome import ChromeDriverManager
    print("All required modules imported successfully")
except ImportError as e:
    print(f"Error importing modules: {e}")
    sys.exit(1)

def test_login():
    print("Starting test_login function")
    # Set up Chrome options
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Run in headless mode
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")

    # Use WebDriver manager to handle driver installation
    service = Service(ChromeDriverManager().install())

    # Initialize the driver
    driver = webdriver.Chrome(service=service, options=chrome_options)

    try:
        print("Navigating to the website")
        driver.get("http://localhost:3000")

        # Wait for the email field to be present
        print("Waiting for email field")
        email_field = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "email"))
        )
        password_field = driver.find_element(By.ID, "password")

        # Enter credentials
        print("Entering credentials")
        email_field.send_keys("your_email@example.com")
        password_field.send_keys("your_password")

        # Submit the form
        print("Submitting login form")
        password_field.send_keys(Keys.RETURN)

        # Wait for the welcome message
        print("Waiting for welcome message")
        WebDriverWait(driver, 10).until(
            EC.title_contains("Welcome")
        )

        # Find and click the logout button
        print("Clicking logout button")
        logout_button = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.ID, "logout"))
        )
        logout_button.click()

        # Wait for the login page
        print("Waiting for login page after logout")
        WebDriverWait(driver, 10).until(
            EC.title_contains("Login")
        )

        print("Test passed successfully!")
        return 0
    except Exception as e:
        print(f"Test failed: {str(e)}")
        return 1
    finally:
        driver.quit()

if __name__ == "__main__":
    print("Starting test script")
    exit(test_login())