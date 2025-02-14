import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <Image
        source={{ uri: "https://www.freepik.com/free-vector/twitch-profile-picture-template_196920138.htm#fromView=search&page=1&position=36&uuid=15c16faf-7245-48e6-b50c-9878e8fa1d43&query=Profile" }}
        style={styles.profileImage}
      />

      {/* User Information */}
      <Text style={styles.userName}>John Doe</Text>
      <Text style={styles.userEmail}>johndoe@example.com</Text>
      <Text style={styles.userLocation}>📍 New York, USA</Text>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 16,
    color: "#777",
    marginBottom: 5,
  },
  userLocation: {
    fontSize: 14,
    color: "#555",
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
    marginBottom: 10,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#ff3b30",
    padding: 10,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
