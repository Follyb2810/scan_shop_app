import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const { width } = Dimensions.get("window");

export default function ScannerArea() {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<any>(null);

  const handleStartScan = () => {
    setIsScanning(true);
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
    <View
      className="mx-4 mt-4 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl overflow-hidden"
      style={{ height: width - 32 }}
    >
      <View className="flex-1 items-center justify-center p-6">
        {!isScanning && !scanResult && (
          <>
            <View className="w-64 h-64 border-8 border-background rounded-3xl items-center justify-center">
              <View className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-fadeText rounded-tl-2xl" />
              <View className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-fadeText rounded-tr-2xl" />
              <View className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-fadeText rounded-bl-2xl" />
              <View className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-fadeText rounded-br-2xl" />
              <Ionicons
                name="scan"
                size={80}
                color="#fff"
                style={{ opacity: 0.5 }}
              />
            </View>

            <TouchableOpacity
              onPress={handleStartScan}
              className="mt-8 bg-card px-8 py-4 rounded-full"
            >
              <Text className="text-emerald-600 font-bold text-lg">
                Start Scanning
              </Text>
            </TouchableOpacity>

            <Text className="text-card text-center mt-4 px-6">
              Position the barcode or QR code within the frame
            </Text>
          </>
        )}

        {isScanning && (
          <View className="items-center">
            <View className="w-64 h-64 border-4 border-card rounded-3xl items-center justify-center">
              <View
                className="w-full h-1 bg-card absolute animate-pulse"
                style={{ top: "50%" }}
              />
              <Ionicons name="scan" size={80} color="#fff" />
            </View>
            <Text className="text-card font-bold text-xl mt-6">
              Scanning...
            </Text>
            <Text className="text-card text-center mt-2">
              Please hold steady
            </Text>
          </View>
        )}

        {scanResult && (
          <View className="w-full items-center">
            <View className="bg-card backdrop-blur-lg rounded-2xl p-6 w-full">
              <View className="items-center mb-4">
                <View className="bg-card p-3 rounded-full mb-3">
                  <Ionicons name="checkmark-circle" size={48} color="#16A34A" />
                </View>
                <Text className="text-card font-bold text-xl">
                  Product Verified!
                </Text>
                <Text className="text-card text-sm mt-1">
                  {scanResult.confidence}% Confidence
                </Text>
              </View>

              <View className="bg-card rounded-xl p-3 mb-3">
                <Text className="text-card text-xs">Product Name</Text>
                <Text className="text-card font-bold">
                  {scanResult.productName}
                </Text>
              </View>

              <View className="bg-card rounded-xl p-3 mb-3">
                <Text className="text-card text-xs">Brand</Text>
                <Text className="text-card font-bold">{scanResult.brand}</Text>
              </View>

              <View className="flex-row justify-between">
                <View className="bg-card rounded-xl p-3 flex-1 mr-2">
                  <Text className="text-card text-xs">Batch No.</Text>
                  <Text className="text-card font-semibold text-xs">
                    {scanResult.batchNumber}
                  </Text>
                </View>
                <View className="bg-card rounded-xl p-3 flex-1">
                  <Text className="text-card text-xs">Expiry</Text>
                  <Text className="text-card font-semibold text-xs">
                    {scanResult.expiryDate}
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity
              onPress={() => setScanResult(null)}
              className="mt-4 bg-card px-8 py-3 rounded-full"
            >
              <Text className="text-success font-bold">Scan Another</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}
