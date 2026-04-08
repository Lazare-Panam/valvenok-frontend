"use client"
import { Snackbar, Alert, Typography, Box, Slide, SlideProps } from "@mui/material"
import { useNotificationStore } from "../store/useNotificationStore"



function SlideLeft(props: SlideProps) {
  return <Slide {...props} direction="left" />
}

export const NotificationProvider = () => {
  const { open, message, severity, partNumber, hideNotification } = useNotificationStore()

  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={hideNotification}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      // Replace TransitionComponent with slots
      slots={{ transition: SlideLeft }}
      sx={{ mt: 2 }}
    >
      <Alert
        onClose={hideNotification}
        severity={severity}
        variant="filled"
        sx={{
          width: "100%",
          bgcolor: severity === "success" ? "primary.main" : "error.main",
          borderRadius: 0, // Industrial look
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
          px: 3,
          // Ensures the text is white against the brand blue or red
          color: "#fff", 
          "& .MuiAlert-icon": { color: "#fff" }
        }}
      >
        <Box>
          <Typography variant="body2" sx={{ fontWeight: 900, textTransform: "uppercase" }}>
            {message}
          </Typography>
          {partNumber && (
            <Typography variant="caption" sx={{ display: "block", opacity: 0.8, fontFamily: "monospace" }}>
              PN: {partNumber}
            </Typography>
          )}
        </Box>
      </Alert>
    </Snackbar>
  )
}