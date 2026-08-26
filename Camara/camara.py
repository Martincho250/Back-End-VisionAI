import cv2

# Read an image
image = cv2.imread('Lionel_Messi,_Player_of_FC_Barcelona_team.jpg')

# Display the image
cv2.imshow('My Image', image)
cv2.waitKey(0)
cv2.destroyAllWindows()


