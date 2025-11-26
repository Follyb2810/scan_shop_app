import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import SafeAreaWrapper from "../../components/Shared/SafeAreaWrapper";

export default function ApplyManufacturerScreen() {
  const [form, setForm] = useState({
    companyName: "",
    companyEmail: "",
    companyPhone: "",
    website: "",
    address: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
    licenseNumber: "",
    registrationNumber: "",
    taxId: "",
    nafdacNumber: "",
    sonCertification: "",
    businessType: "",
    yearsInBusiness: "",
  });

  const [documents, setDocuments] = useState<
    DocumentPicker.DocumentPickerAsset[]
  >([]);

  const handleChange = (key: string, value: string) => {
    setForm({ ...form, [key]: value });
  };

  const handlePickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "*/*",
      });
      if (!result.canceled) {
        const successResult =
          result as DocumentPicker.DocumentPickerSuccessResult;

        // setDocuments([...documents, result.assets]);
        if (documents.length + successResult.assets.length <= 2) {
          setDocuments((prevSelectedDocuments) => [
            ...prevSelectedDocuments,
            ...successResult.assets,
          ]);
        }
      }
      //   if (result.assets === "success") {
      //     setDocuments([...documents, result.uri]);
      //   }
    } catch (err) {
      console.log("Document pick error:", err);
    }
  };
  const removeDocument = (index: number) => {
    setDocuments((prevSelectedDocuments) =>
      prevSelectedDocuments.filter((_, i) => i !== index)
    );
  };
  const handleSubmit = () => {
    // Simple validation
    if (!form.companyName || !form.companyEmail || !form.companyPhone) {
      Alert.alert("Validation Error", "Please fill all required fields.");
      return;
    }
    console.log("Form submitted:", form, documents);
    Alert.alert("Success", "Application submitted successfully!");
  };

  return (
    <SafeAreaWrapper>
      <ScrollView className="px-4 flex-1">
        <Text className="text-2xl font-bold text-gray-800 mb-4">
          Apply as Manufacturer
        </Text>

        {/* Form Fields */}
        {[
          { label: "Company Name", key: "companyName", required: true },
          { label: "Company Email", key: "companyEmail", required: true },
          { label: "Company Phone", key: "companyPhone", required: true },
          { label: "Website", key: "website" },
          { label: "Address", key: "address", required: true },
          { label: "City", key: "city", required: true },
          { label: "State", key: "state", required: true },
          { label: "Country", key: "country", required: true },
          { label: "Postal Code", key: "postalCode" },
          { label: "License Number", key: "licenseNumber" },
          { label: "Registration Number", key: "registrationNumber" },
          { label: "Tax ID", key: "taxId" },
          { label: "NAFDAC Number", key: "nafdacNumber" },
          { label: "SON Certification", key: "sonCertification" },
          { label: "Business Type", key: "businessType" },
          { label: "Years in Business", key: "yearsInBusiness" },
        ].map((field) => (
          <View key={field.key} className="mb-4">
            <Text className="text-gray-700 font-semibold mb-1">
              {field.label}
              {field.required ? "*" : ""}
            </Text>
            <TextInput
              className="border border-gray-300 rounded-xl px-4 py-2 bg-white"
              placeholder={`Enter ${field.label}`}
              value={form[field.key as keyof typeof form]}
              onChangeText={(text) => handleChange(field.key, text)}
              keyboardType={
                field.key.includes("Email") ? "email-address" : "default"
              }
            />
          </View>
        ))}

        {/* Documents */}
        <View className="mb-4">
          <Text className="text-gray-700 font-semibold mb-2">
            Supporting Documents
          </Text>
          {documents.map((doc, index) => (
            <Text key={index} className="text-gray-500 mb-1">
              {doc.mimeType}
              {/* {doc.split("/").pop()} */}
            </Text>
          ))}
          <TouchableOpacity
            className="bg-purple-600 px-4 py-2 rounded-xl"
            onPress={handlePickDocument}
          >
            <Text className="text-white font-semibold text-center">
              Upload Document
            </Text>
          </TouchableOpacity>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          className="bg-success px-6 py-3 rounded-xl mb-8 mt-4"
          onPress={handleSubmit}
        >
          <Text className="text-white font-bold text-center text-lg">
            Submit Application
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaWrapper>
  );
}
