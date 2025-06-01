#include <jni.h>
#include "NitroPdfConvertOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitropdfconvert::initialize(vm);
}
