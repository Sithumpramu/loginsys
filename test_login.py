from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys

def test_login():
    driver = webdriver.Chrome(executable_path=r'C:\Users\user\Downloads\chrome-win64\chrome-win64\chrome.exe')
    driver.get("http://localhost:3000")

    # Find the email and password fields
    email_field = driver.find_element(By.ID, "email")
    password_field = driver.find_element(By.ID, "password")

    # Enter valid credentials
    email_field.send_keys("your_email@example.com")
    password_field.send_keys("your_password")

    # Submit the login form
    password_field.send_keys(Keys.RETURN)

    # Assert successful login
    assert "Welcome" in driver.title

    # Find the logout button
    logout_button = driver.find_element(By.ID, "logout")

    # Click the logout button
    logout_button.click()

    # Assert successful logout
    assert "Login" in driver.title

    driver.quit()