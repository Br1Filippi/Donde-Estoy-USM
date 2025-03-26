# ¿Donde Estoy USM?

A mobile navigation system to help students find their way around USM campus.

## 📱 Overview

### Problem
At the university, students (especially newcomers) face difficulties finding their way around campus and locating classrooms, affecting their integration into university life.

### Solution
A mobile information system that guides students through campus, featuring:
- Building and classroom search functionality
- Indoor and outdoor navigation
- Integration with institutional accounts for personalized class schedules

## 🎯 Objectives

- Provide interactive GPS-based maps showing classroom locations
- Enable real-time navigation through university facilities
- Offer personalized classroom/subject search based on schedules

## 🔑 Key Features

### Interactive Campus Maps
- Digital maps of university buildings and floors
- Real-time position tracking
- Floor-by-floor navigation

### GPS Navigation
- Real-time directions to classrooms
- Similar to city GPS navigation

### Personalized Search
- Classroom number search
- Subject-based location finding
- Current position to destination routing

### Visual Guides
- Video tutorials for building navigation
- Traditional floor plan maps
- Step-by-step instructions

## 🚀 MVP (Building U Pilot)

### Features
- Floor-by-floor maps of Building U
- Video guides from entrance to classrooms
- Basic classroom search functionality
- Trial subject integration

## 🛠️ Technical Stack

- **Frontend:** React Native
- **Backend:** Firebase
- **Maps:** OpenStreetMap
- **Authentication:** Firebase Auth

## 🌿 Branch Management and WorkFlow

### Main Branch (`main`)
- Contains production-ready code
- Only accepts merges from `staging`
- Requires pull request approval
- Tagged for releases

### Staging Branch (`staging`)
- Integration branch for feature testing
- Features are tested here before production
- Regular deployments to testing environment
- Merges from feature branches

### Workflow
1. Create feature branches from `staging`
2. Develop and test features
3. Merge to `staging` via pull request
4. Test in staging environment
5. Merge to `main` when ready for production

## 📋 Requirements

### Visual Studio Extensions
- GitMoji for commits :) 

### Institutional
- Digital floor plans
- Classroom listings
- Access to building information

### Technical
- React Native development environment
- Firebase project setup
- OpenStreetMap API access

## 🔗 Useful Links

- [OpenStreetMap USM](https://www.openstreetmap.org/#map=18/-33.036417/-71.485961)