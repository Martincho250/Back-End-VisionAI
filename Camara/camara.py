import cv2 as cv

# Read the image
img = cv.imread('Lionel_Messi,_Player_of_FC_Barcelona_team.jpg')

# Convert to grayscale
gray = cv.cvtColor(img, cv.COLOR_BGR2GRAY)

# Apply Gaussian blur
blurred = cv.GaussianBlur(gray, (5, 5), 0)

# Detect edges using Canny
edges = cv.Canny(blurred, 50, 150)

# Display all results
cv.imshow('Original', img)
cv.imshow('Grayscale', gray)
cv.imshow('Edges', edges)

cv.waitKey(0)
cv.destroyAllWindows()
