cmake_minimum_required(VERSION 3.4.1)

# Define a library called "native-lib"
add_library(
    native-lib
    SHARED
    native-lib.cpp # Specify your C++ source file(s) here
)

# Locate the log library from the Android NDK
find_library(
    log-lib
    log
)

# Link the native library to the log library
target_link_libraries(
    native-lib
    ${log-lib}
)
