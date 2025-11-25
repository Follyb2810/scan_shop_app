import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const ScanScreen = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState(null);

  const recentScans = [
    {
      id: 1,
      productName: "Organic Honey",
      status: "verified",
      date: "2 hours ago",
      confidence: 98,
    },
    {
      id: 2,
      productName: "Premium Olive Oil",
      status: "verified",
      date: "1 day ago",
      confidence: 95,
    },
    {
      id: 3,
      productName: "Natural Spices",
      status: "warning",
      date: "2 days ago",
      confidence: 67,
    },
  ];

  const quickActions = [
    { id: 1, title: "Scan Barcode", icon: "barcode", color: "#3b82f6" },
    { id: 2, title: "QR Code", icon: "qr-code", color: "#8b5cf6" },
    { id: 3, title: "Batch Number", icon: "keypad", color: "#ec4899" },
    { id: 4, title: "Photo Verify", icon: "camera", color: "#f59e0b" },
  ];

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate scanning
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        productName: "Organic Honey",
        brand: "Pure Nature",
        status: "verified",
        confidence: 98,
        batchNumber: "BN2024-1234",
        manufacturingDate: "15 Oct 2024",
        expiryDate: "15 Oct 2026",
      });
    }, 3000);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        {/* Header */}
        <View className="px-4 pt-4 pb-2">
          <Text className="text-gray-800 text-2xl font-bold">
            Verify Product
          </Text>
          <Text className="text-gray-500 text-sm mt-1">
            Scan to check authenticity
          </Text>
        </View>

        {/* Scanner Area */}
        <View
          className="mx-4 mt-4 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl overflow-hidden"
          style={{ height: width - 32 }}
        >
          <View className="flex-1 items-center justify-center p-6">
            {!isScanning && !scanResult && (
              <>
                {/* Scanner Frame */}
                <View className="w-64 h-64 border-4 border-white/50 rounded-3xl items-center justify-center">
                  <View className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-white rounded-tl-2xl" />
                  <View className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-white rounded-tr-2xl" />
                  <View className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-white rounded-bl-2xl" />
                  <View className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-white rounded-br-2xl" />

                  <Ionicons
                    name="scan"
                    size={80}
                    color="#fff"
                    style={{ opacity: 0.5 }}
                  />
                </View>

                <TouchableOpacity
                  onPress={handleStartScan}
                  className="mt-8 bg-white px-8 py-4 rounded-full"
                >
                  <Text className="text-emerald-600 font-bold text-lg">
                    Start Scanning
                  </Text>
                </TouchableOpacity>

                <Text className="text-white/80 text-center mt-4 px-6">
                  Position the barcode or QR code within the frame
                </Text>
              </>
            )}

            {isScanning && (
              <View className="items-center">
                <View className="w-64 h-64 border-4 border-white rounded-3xl items-center justify-center">
                  <View
                    className="w-full h-1 bg-white absolute animate-pulse"
                    style={{ top: "50%" }}
                  />
                  <Ionicons name="scan" size={80} color="#fff" />
                </View>
                <Text className="text-white font-bold text-xl mt-6">
                  Scanning...
                </Text>
                <Text className="text-white/80 text-center mt-2">
                  Please hold steady
                </Text>
              </View>
            )}

            {scanResult && (
              <View className="w-full items-center">
                <View className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 w-full">
                  <View className="items-center mb-4">
                    <View className="bg-white p-3 rounded-full mb-3">
                      <Ionicons
                        name="checkmark-circle"
                        size={48}
                        color="#10b981"
                      />
                    </View>
                    <Text className="text-white font-bold text-xl">
                      Product Verified!
                    </Text>
                    <Text className="text-white/80 text-sm mt-1">
                      {scanResult.confidence}% Confidence
                    </Text>
                  </View>

                  <View className="bg-white/20 rounded-xl p-3 mb-3">
                    <Text className="text-white/70 text-xs">Product Name</Text>
                    <Text className="text-white font-bold">
                      {scanResult.productName}
                    </Text>
                  </View>

                  <View className="bg-white/20 rounded-xl p-3 mb-3">
                    <Text className="text-white/70 text-xs">Brand</Text>
                    <Text className="text-white font-bold">
                      {scanResult.brand}
                    </Text>
                  </View>

                  <View className="flex-row justify-between">
                    <View className="bg-white/20 rounded-xl p-3 flex-1 mr-2">
                      <Text className="text-white/70 text-xs">Batch No.</Text>
                      <Text className="text-white font-semibold text-xs">
                        {scanResult.batchNumber}
                      </Text>
                    </View>
                    <View className="bg-white/20 rounded-xl p-3 flex-1">
                      <Text className="text-white/70 text-xs">Expiry</Text>
                      <Text className="text-white font-semibold text-xs">
                        {scanResult.expiryDate}
                      </Text>
                    </View>
                  </View>
                </View>

                <TouchableOpacity
                  onPress={() => setScanResult(null)}
                  className="mt-4 bg-white px-8 py-3 rounded-full"
                >
                  <Text className="text-emerald-600 font-bold">
                    Scan Another
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>

        {/* Quick Actions */}
        <View className="px-4 mt-6">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Quick Verification
          </Text>
          <View className="flex-row flex-wrap justify-between">
            {quickActions.map((action) => (
              <TouchableOpacity
                key={action.id}
                className="w-[48%] bg-white rounded-2xl p-4 mb-3 items-center"
              >
                <View
                  className="w-14 h-14 rounded-full items-center justify-center mb-2"
                  style={{ backgroundColor: `${action.color}20` }}
                >
                  <Ionicons
                    name={"add-circle-outline"}
                    size={28}
                    color={action.color}
                  />
                </View>
                <Text className="text-gray-800 font-semibold text-sm text-center">
                  {action.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Scans */}
        <View className="px-4 mt-6 mb-6">
          <Text className="text-gray-800 font-bold text-lg mb-3">
            Recent Scans
          </Text>
          {recentScans.map((scan) => (
            <TouchableOpacity
              key={scan.id}
              className="bg-white rounded-2xl p-4 mb-3 flex-row items-center"
            >
              <View
                className={`w-12 h-12 rounded-full items-center justify-center ${
                  scan.status === "verified" ? "bg-emerald-100" : "bg-amber-100"
                }`}
              >
                <Ionicons
                  name={
                    scan.status === "verified" ? "checkmark-circle" : "warning"
                  }
                  size={24}
                  color={scan.status === "verified" ? "#10b981" : "#f59e0b"}
                />
              </View>

              <View className="flex-1 ml-3">
                <Text className="text-gray-800 font-bold">
                  {scan.productName}
                </Text>
                <Text className="text-gray-500 text-xs">{scan.date}</Text>
              </View>

              <View className="items-end">
                <View
                  className={`px-3 py-1 rounded-full ${
                    scan.status === "verified"
                      ? "bg-emerald-100"
                      : "bg-amber-100"
                  }`}
                >
                  <Text
                    className={`text-xs font-bold ${
                      scan.status === "verified"
                        ? "text-emerald-600"
                        : "text-amber-600"
                    }`}
                  >
                    {scan.confidence}%
                  </Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={18}
                  color="#d1d5db"
                  style={{ marginTop: 4 }}
                />
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Info Banner */}
        <View className="mx-4 mb-6 bg-purple-50 p-4 rounded-2xl border border-purple-200">
          <View className="flex-row items-start">
            <View className="bg-purple-600 p-2 rounded-full">
              <Ionicons name="shield-checkmark" size={20} color="#fff" />
            </View>
            <View className="flex-1 ml-3">
              <Text className="text-gray-800 font-bold text-sm">
                How Verification Works
              </Text>
              <Text className="text-gray-600 text-xs mt-1">
                Our AI-powered system checks product authenticity against our
                database of verified products and manufacturers.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScanScreen;
