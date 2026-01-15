// Global Translation System for Campus Summer
// This file provides translation functionality across all pages

const translations = {
  tr: {
    // Main page
    studentInfoSystem: "Öğrenci Bilgi Sistemi",
    studentLogin: "Öğrenci Girişi",
    academicianLogin: "Akademisyen Girişi",
    adminLogin: "Admin Girişi",
    noAccount: "Hesabınız yok mu?",
    studentRegister: "Öğrenci Kayıt",
    academicianRegister: "Akademisyen Kayıt",
    
    // Navigation
    home: "Anasayfa",
    courses: "Dersler",
    coursesHero: "Yaz Dersleri",
    universities: "Üniversiteler",
    about: "Hakkımızda",
    contact: "İletişim",
    
    // Common
    loading: "Yükleniyor...",
    error: "Hata",
    success: "Başarılı",
    cancel: "İptal",
    save: "Kaydet",
    delete: "Sil",
    edit: "Düzenle",
    close: "Kapat",
    submit: "Gönder",
    search: "Ara",
    filter: "Filtrele",
    clear: "Temizle",
    
    // Profile
    profile: "Profil",
    editProfile: "Profil Düzenle",
    logout: "Çıkış Yap",
    firstName: "Ad",
    lastName: "Soyad",
    email: "E-posta",
    studentNumber: "Okul Numarası",
    username: "Kullanıcı Adı",
    userType: "Kullanıcı Tipi",
    student: "Öğrenci",
    academician: "Akademisyen",
    
    // Notifications
    notifications: "Bildirimler",
    markAllRead: "Tümünü Okundu İşaretle",
    viewAll: "Tümünü Gör",
    noNotifications: "Henüz bildirim yok",
    
    // Courses
    myCourses: "Benim Derslerim",
    enrolledCourses: "Kayıtlı Olduğum Dersler",
    favoriteCourses: "Favori Derslerim",
    courseName: "Ders Adı",
    courseCode: "Ders Kodu",
    credits: "Kredi",
    startDate: "Başlangıç",
    endDate: "Bitiş",
    status: "Durum",
    active: "Aktif",
    pending: "Beklemede",
    completed: "Tamamlandı",
    addCourse: "Yeni Ders Ekle",
    viewMyCourses: "Derslerimi Görüntüle",
    
    // Planning
    coursePlanning: "Ders Planlama",
    calendar: "Takvim",
    timeline: "Zaman Çizelgesi",
    weekly: "Haftalık",
    list: "Liste",
    allStatuses: "Tüm Durumlar",
    upcoming: "Yaklaşan",
    ongoing: "Devam Eden",
    totalCourses: "Toplam Ders",
    totalCredits: "Toplam Kredi",
    
    // Applications
    pendingApplications: "Bekleyen Başvurular",
    applications: "Başvurular",
    approve: "Onayla",
    reject: "Reddet",
    applicationDate: "Başvuru Tarihi",
    applicationNote: "Başvuru Notu",
    
    // Dashboard
    dashboard: "Panel",
    academicianDashboard: "Akademisyen Paneli",
    statistics: "İstatistikler",
    totalStudents: "Toplam Öğrenci",
    activeCourses: "Aktif Ders",
    
    // Footer
    quickLinks: "Hızlı Bağlantılar",
    support: "Destek",
    privacyPolicy: "Gizlilik Politikası",
    allRightsReserved: "Tüm hakları saklıdır.",
    
    // Hero section
    heroTitle: "Türkiye'nin En Kapsamlı Yaz Dersleri Platformu",
    heroSubtitle: "200+ üniversiteden binlerce yaz dersi seçeneği tek platformda.",
    university: "Üniversite",
    summerCourse: "Yaz Dersi",
    happyStudent: "Mutlu Öğrenci",
    
    // Profile details
    userTypeLabel: "Kullanıcı Tipi:",
    studentNumberLabel: "Okul Numarası:",
    usernameLabel: "Kullanıcı Adı:",
    adminCode: "Admin Kodu",
    user: "Kullanıcı",
    
    // Course sections
    enrolledCoursesTitle: "Kayıtlı Olduğum Dersler",
    enrolledCoursesSubtitle: "Onaylanmış ve aktif dersleriniz",
    myCoursesTitle: "Benim Derslerim",
    myCoursesSubtitle: "Eklediğiniz tüm dersler",
    favoriteCoursesTitle: "Favori Derslerim",
    favoriteCoursesSubtitle: "Seçtiğiniz yaz okulu dersleri",
    academicianDashboardTitle: "Akademisyen Paneli",
    academicianDashboardSubtitle: "Derslerinizi yönetin ve başvuruları takip edin",
    coursePlanningTitle: "Ders Planlama",
    coursePlanningSubtitle: "Kayıtlı olduğunuz derslerin takvimi ve planlaması",
    
    // Course details
    universityLabel: "Üniversite:",
    academicianLabel: "Akademisyen:",
    startLabel: "Başlangıç:",
    endLabel: "Bitiş:",
    creditsLabel: "Kredi:",
    statusLabel: "Durum:",
    courseLink: "Ders Linkine Git",
    courseLinkNotAdded: "Ders linki henüz eklenmedi",
    cancelCourse: "Dersi İptal Et",
    manageCourse: "Dersi Yönet",
    viewApplications: "Başvuruları Görüntüle",
    registeredStudents: "Kayıtlı Öğrenci:",
    category: "Kategori:",
    added: "Eklenme:",
    
    // Planning views
    previousMonth: "Önceki",
    nextMonth: "Sonraki",
    previousWeek: "Önceki Hafta",
    nextWeek: "Sonraki Hafta",
    noCourses: "Ders yok",
    courseCodeLabel: "Kod:",
    duration: "Süre:",
    daysRemaining: "Kalan Süre:",
    days: "gün",
    completedPercent: "tamamlandı",
    ongoingStatus: "Devam Ediyor",
    upcomingStatus: "Yaklaşan",
    completedStatus: "Tamamlandı",
    
    // Applications
    pendingApplicationsTitle: "Bekleyen Başvurular",
    pendingApplicationsSubtitle: "Aşağıdaki başvuruları onaylamanız veya reddetmeniz gerekiyor.",
    noPendingApplications: "Bekleyen başvuru bulunmuyor",
    allApplicationsProcessed: "Tüm başvurularınız işleme alınmış.",
    studentEmail: "E-posta bulunamadı",
    studentNumberShort: "Öğrenci No:",
    courseLabel: "Ders:",
    applicationNoteLabel: "Başvuru Notu:",
    waitingStatus: "Beklemede",
    allApplications: "Tüm Başvurular",
    confirmApplication: "Bu başvuruyu onaylamak istediğinize emin misiniz?",
    rejectionReason: "Red nedeni (isteğe bağlı):",
    
    // Profile edit
    editProfileTitle: "Profil Düzenle",
    changePassword: "Şifre Değiştir (Opsiyonel)",
    currentPassword: "Mevcut Şifre",
    newPassword: "Yeni Şifre",
    confirmPassword: "Şifre Tekrar",
    passwordPlaceholder: "Boş bırakılabilir",
    cannotChangeField: "Bu alan değiştirilemez",
    canChangeUsername: "Kullanıcı adınızı değiştirebilirsiniz",
    profileUpdated: "Profil başarıyla güncellendi!",
    
    // Statistics
    totalCourse: "Toplam Ders",
    upcomingLabel: "Yaklaşan",
    ongoingLabel: "Devam Eden",
    pastLabel: "Tamamlanan",
    totalCreditsLabel: "Toplam Kredi",
    totalCourseLabel: "Toplam Ders",
    activeCourseLabel: "Aktif Ders",
    totalStudentLabel: "Toplam Öğrenci",
    pendingApplicationLabel: "Bekleyen Başvuru",
    
    // Messages
    noEnrolledCourses: "Henüz kayıtlı olduğunuz ders bulunmuyor.",
    browseCourses: "Derslere göz atın",
    errorLoadingCourses: "Dersler yüklenirken bir hata oluştu.",
    noCoursesToPlan: "Planlanacak ders bulunmuyor.",
    errorLoadingPlanning: "Planlama yüklenirken bir hata oluştu.",
    noCoursesAdded: "Henüz ders eklememişsiniz.",
    addNewCourse: "Yeni ders ekleyin",
    errorLoadingMyCourses: "Dersler yüklenirken bir hata oluştu.",
    removeFavoriteConfirm: "Bu dersi favorilerden kaldırmak istediğinize emin misiniz?",
    favoriteRemoved: "Ders favorilerden kaldırıldı!",
    withdrawCourseConfirm: "Bu dersten çıkış yapmak istediğinize emin misiniz?",
    withdrawCourseWarning: "Bu işlem geri alınamaz ve ders kaydınız iptal edilecektir.",
    courseWithdrawn: "Dersten başarıyla çıkış yaptınız!",
    applicationApproved: "Başvuru başarıyla onaylandı!",
    applicationRejected: "Başvuru reddedildi!",
    
    // Profile edit errors
    sessionNotFound: "Oturum bilgisi bulunamadı. Lütfen tekrar giriş yapın.",
    currentPasswordRequired: "Şifre değiştirmek için mevcut şifrenizi girmelisiniz.",
    passwordsNotMatch: "Yeni şifreler eşleşmiyor.",
    passwordMinLength: "Yeni şifre en az 6 karakter olmalıdır.",
    usernameMinLength: "Kullanıcı adı en az 3 karakter olmalıdır.",
    usernameInvalidChars: "Kullanıcı adı sadece harf, rakam ve alt çizgi içerebilir.",
    profileUpdateError: "Profil güncellenirken bir hata oluştu.",
    serverConnectionError: "Sunucuya bağlanılamadı. Lütfen tekrar deneyin.",
    
    // Footer
    footerDescription: "Türkiye'nin en kapsamlı yaz dersleri takip platformu. Akademik hedeflerinize ulaşmanın en kolay yolu.",
    mainPage: "Ana Sayfa",
    contactLabel: "İletişim",
    location: "Gaziantep, Türkiye",
    
    // Universities page
    universitiesTitle: "Üniversiteler",
    universitiesSubtitle: "200+ üniversiteden yaz dersleri ile akademik geleceğinizi şekillendirin",
    allUniversities: "Tüm Üniversiteler",
    allAcademicians: "Tüm Akademisyenler",
    allStudents: "Tüm Öğrenciler",
    mostPreferred: "En çok tercih edilen üniversiteler",
    addUniversity: "Üniversite Ekle",
    newUniversity: "Yeni Üniversite Ekle",
    universityName: "Üniversite Adı",
    city: "Şehir",
    website: "Web Sitesi",
    type: "Tür",
    description: "Açıklama",
    state: "Devlet",
    foundation: "Vakıf",
    private: "Özel",
    add: "Ekle",
    academician: "Akademisyen",
    student: "Öğrenci",
    goToWebsite: "Web Sitesine Git",
    noWebsite: "Web Sitesi Yok",
    deleteUniversity: "Üniversiteyi Sil",
    confirmDeleteUniversity: "üniversitesini silmek istediğinizden emin misiniz?",
    universityAdded: "Üniversite başarıyla eklendi!",
    universityDeleted: "Üniversite başarıyla silindi!",
    universityNotFound: "Üniversite bilgisi bulunamadı.",
    contactAdmin: "Lütfen yönetici ile iletişime geçin.",
    noUniversityAdded: "Henüz üniversite eklenmemiş.",
    clickToAdd: "Yeni üniversite eklemek için yukarıdaki butona tıklayın.",
    universityInfo: "Akademisyen ve Öğrenci Sayıları",
    
    // About page
    aboutTitle: "Genel Bilgi",
    aboutText1: "Campus Summer İç ve Dış Ticaret A.Ş., 2025 yılında kurulmuştur ve 2025 yılından bu yana üniversitelerde yaz dersleri alanında hizmet görmektedir. Campus Summer, \"Herkes için teknoloji\" felsefesiyle her an, her yerde öğrencilerin yanında olarak teknolojiye erişimi kolaylaştırıp keyifli bir üniversite ortamı sunmaktadır.",
    aboutText2: "Yaygınlığı, hizmet kalitesi, güvenilirliği ve ürün çeşitliliği ile dinamik, yenilikçi ve atılımcı yapısı sayesinde sektöründe fark yaratan Campus Summer, paydaşlarıyla birlikte geleceği şekillendirmektedir.",
    aboutText3: "Campus Summer, öğrencilerin üniversitesinin uzamaması için yaz okulu ararken kolaylıkla bulabileceği , üniversiteyle öğrenci arasındaki bağın kurulacağı bir platformdur.",
    aboutText4: "Türkiye'de öğrencilerin ilk defa yaz okulu platformuyla tanıştıran Campus Summer , bugün geniş öğrenci kitlesine hitap etmektedir. Campus Summer, gücünü öğrencilerden , başarısını yöneticilerinden , geleceğini ise sürdürülebilirlik anlayışından almaktadır.",
    breadcrumbHome: "Ana Sayfa",
    breadcrumbAbout: "Hakkımızda",
    
    // Contact page
    contactTitle: "İletişim",
    contactSubtitle: "Bizimle iletişime geçin, sorularınızı yanıtlayalım",
    contactInfo: "İletişim Bilgileri",
    emailLabel: "E-posta",
    phoneLabel: "Telefon",
    addressLabel: "Adres",
    workingHours: "Çalışma Saatleri",
    weekdays: "Pazartesi - Cuma: 09:00 - 18:00",
    weekend: "Hafta Sonu: Kapalı",
    sendMessage: "Bize Mesaj Gönderin",
    fullName: "Ad Soyad",
    phone: "Telefon",
    recipient: "Kime Göndermek İstersiniz?",
    select: "Seçiniz...",
    both: "Her İkisine",
    subject: "Konu",
    message: "Mesajınız",
    send: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    namePlaceholder: "Adınız ve soyadınız",
    emailPlaceholder: "ornek@email.com",
    phonePlaceholder: "+90 5XX XXX XX XX",
    subjectPlaceholder: "Mesajınızın konusu",
    messagePlaceholder: "Mesajınızı buraya yazın...",
    fillAllFields: "Lütfen tüm zorunlu alanları doldurun.",
    messageSent: "Mesajınız başarıyla gönderildi!",
    messageError: "Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
    connectionError: "Sunucuya bağlanılamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.",
    ourTeam: "Ekibimiz",
    developer: "Geliştirici",
    
    // Courses page filters
    filterTitle: "Filtrele",
    courseNameLabel: "Ders Adı",
    courseNamePlaceholder: "Ders adı ara...",
    universityLabel: "Üniversite",
    allUniversities: "Tüm Üniversiteler",
    courseLanguageLabel: "Ders Dili",
    allLanguages: "Tüm Diller",
    turkish: "Türkçe",
    english: "İngilizce",
    minFee: "Min Ücret (₺)",
    maxFee: "Max Ücret (₺)",
    unlimited: "Sınırsız",
    applicationStart: "Başvuru Başlangıç",
    applicationEnd: "Başvuru Bitiş",
    courseStart: "Ders Başlangıç",
    courseEnd: "Ders Bitiş",
    onlyWithQuota: "Sadece kontenjanı olan dersler",
    clearFilters: "Filtreleri Temizle",
    coursesFound: "ders bulundu",
    popularCourses: "Popüler Dersler",
    popularCoursesSubtitle: "En çok tercih edilen yaz dersleri",
    allCourses: "Tüm Dersler",
    allCoursesSubtitle: "Favorilerinize ekleyebileceğiniz dersler",
    myCoursesSubtitle: "Sadece sizin eklediğiniz dersler gösterilmektedir",
    addCourseTitle: "Ders Ekle",
    addCourseSubtitle: "Yeni bir ders ekleyin",
    courseNameRequired: "Ders Adı *",
    courseCodeLabel: "Ders Kodu",
    categoryLabel: "Kategori",
    selectCategory: "Kategori Seçin",
    mathematics: "Matematik",
    chemistry: "Kimya",
    computerProgramming: "Bilgisayar Programlama",
    physics: "Fizik",
    statistics: "İstatistik",
    other: "Diğer",
    descriptionLabel: "Açıklama",
    applicationDeadline: "Başvuru Son Tarihi",
    startDateLabel: "Başlangıç Tarihi",
    endDateLabel: "Bitiş Tarihi",
    priceLabel: "Ücret (₺)",
    quotaLabel: "Kontenjan",
    languageLabel: "Ders Dili",
    addCourseButton: "Ders Ekle",
    courseAdded: "Ders başarıyla eklendi! Dersleriniz aşağıda güncelleniyor...",
    noCoursesYet: "Henüz ders eklenmemiş",
    noCoursesMatch: "Filtre kriterlerinize uygun ders bulunamadı. Lütfen filtreleri değiştirip tekrar deneyin.",
    noCoursesAddedYet: "Henüz ders eklememişsiniz. Yukarıdaki formdan ders ekleyebilirsiniz.",
    editCourse: "Düzenle",
    deleteCourse: "Dersi Sil",
    confirmDeleteCourse: "Bu dersi kalıcı olarak silmek istediğinize emin misiniz?",
    deleteCourseWarning: "Bu işlem geri alınamaz!",
    courseDeleted: "Ders başarıyla silindi!",
    courseUpdated: "Ders başarıyla güncellendi!",
    addToFavorites: "Favoriye Ekle",
    removeFromFavorites: "Favorilerden Çıkar",
    apply: "Başvur",
    viewDetails: "Detay Gör",
    applicationDeadlinePassed: "Başvuru Süresi Doldu",
    yourCourse: "Sizin Dersiniz",
    teacher: "Öğretmen:",
    fee: "Ücret",
    quota: "Kontenjan",
    language: "Dil",
    students: "Öğrenci",
    notSpecified: "Belirtilmemiş",
    noDescription: "Açıklama bulunmuyor",
    courseDetails: "Ders Hakkında",
    courseInfo: "Ders Bilgileri",
    importantDates: "Önemli Tarihler",
    prerequisites: "Ön Koşullar",
    equivalencyInfo: "Denklik Bilgisi",
    courseInstructor: "Dersi Veren Akademisyen",
    emailLabel: "E-posta:",
    free: "Ücretsiz",
    credits: "Kredi",
    courseHours: "Ders Saati",
    hours: "Saat",
    enrolledStudents: "Kayıtlı Öğrenci",
    occupancyRate: "Doluluk Oranı",
    applications: "Başvurular",
    enrolledStudentsTitle: "Kayıtlı Öğrenciler",
    noEnrolledStudents: "Bu derse henüz kayıtlı öğrenci bulunmuyor.",
    removeFromCourse: "Dersten Çıkar",
    confirmRemoveStudent: "Bu öğrenciyi dersten çıkarmak istediğinize emin misiniz?",
    removeStudentWarning: "Bu işlem geri alınamaz ve öğrencinin ders kaydı iptal edilecektir.",
    studentRemoved: "Öğrenci başarıyla dersten çıkarıldı!",
    noApplications: "Henüz başvuru yapılmamış.",
    applicationStatus: "Durum",
    approved: "Onaylandı",
    rejected: "Reddedildi",
    statusUpdate: "Durum Güncelleme:",
    rejectionReasonLabel: "Red Nedeni:",
    confirmApply: "Bu derse başvurmak istediğinize emin misiniz?",
    applicationSubmitted: "Başvurunuz başarıyla alındı! Akademisyen onayı bekleniyor.",
    applicationError: "Başvuru yapılamadı",
    pleaseLogin: "Lütfen önce giriş yapın",
    courseLinkLabel: "Ders Linki (Udemy, YouTube, vb.)",
    courseLinkPlaceholder: "https://www.udemy.com/course/...",
    courseLinkHelp: "Öğrenciler bu linke tıklayarak ders içeriğine erişebilir",
    editCourseTitle: "Ders Düzenle",
    saveButton: "Kaydet",
    cancelButton: "İptal",
    courseNameSearch: "Ders adı ara...",
    universitiesNotLoaded: "Üniversiteler yüklenemedi",
    editCourseLink: "Ders Linki (Udemy, YouTube, vb.)",
    people: "Kişi",
    enrollmentDate: "Kayıt Tarihi:",
    enrolled: "Kayıtlı",
    rejectApplicationConfirm: "Bu başvuruyu reddetmek istediğinize emin misiniz?"
  },
  en: {
    // Main page
    studentInfoSystem: "Student Information System",
    studentLogin: "Student Login",
    academicianLogin: "Academician Login",
    adminLogin: "Admin Login",
    noAccount: "Don't have an account?",
    studentRegister: "Student Registration",
    academicianRegister: "Academician Registration",
    
    // Navigation
    home: "Home",
    courses: "Courses",
    coursesHero: "Summer Courses",
    universities: "Universities",
    about: "About",
    contact: "Contact",
    
    // Common
    loading: "Loading...",
    error: "Error",
    success: "Success",
    cancel: "Cancel",
    save: "Save",
    delete: "Delete",
    edit: "Edit",
    close: "Close",
    submit: "Submit",
    search: "Search",
    filter: "Filter",
    clear: "Clear",
    
    // Profile
    profile: "Profile",
    editProfile: "Edit Profile",
    logout: "Logout",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    studentNumber: "Student Number",
    username: "Username",
    userType: "User Type",
    student: "Student",
    academician: "Academician",
    
    // Notifications
    notifications: "Notifications",
    markAllRead: "Mark All as Read",
    viewAll: "View All",
    noNotifications: "No notifications yet",
    
    // Courses
    myCourses: "My Courses",
    enrolledCourses: "My Enrolled Courses",
    favoriteCourses: "My Favorite Courses",
    courseName: "Course Name",
    courseCode: "Course Code",
    credits: "Credits",
    startDate: "Start Date",
    endDate: "End Date",
    status: "Status",
    active: "Active",
    pending: "Pending",
    completed: "Completed",
    addCourse: "Add New Course",
    viewMyCourses: "View My Courses",
    
    // Planning
    coursePlanning: "Course Planning",
    calendar: "Calendar",
    timeline: "Timeline",
    weekly: "Weekly",
    list: "List",
    allStatuses: "All Statuses",
    upcoming: "Upcoming",
    ongoing: "Ongoing",
    totalCourses: "Total Courses",
    totalCredits: "Total Credits",
    
    // Applications
    pendingApplications: "Pending Applications",
    applications: "Applications",
    approve: "Approve",
    reject: "Reject",
    applicationDate: "Application Date",
    applicationNote: "Application Note",
    
    // Dashboard
    dashboard: "Dashboard",
    academicianDashboard: "Academician Dashboard",
    statistics: "Statistics",
    totalStudents: "Total Students",
    activeCourses: "Active Courses",
    
    // Footer
    quickLinks: "Quick Links",
    support: "Support",
    privacyPolicy: "Privacy Policy",
    allRightsReserved: "All rights reserved.",
    
    // Hero section
    heroTitle: "Turkey's Most Comprehensive Summer Courses Platform",
    heroSubtitle: "Thousands of summer course options from 200+ universities in one platform.",
    university: "University",
    summerCourse: "Summer Course",
    happyStudent: "Happy Student",
    
    // Profile details
    userTypeLabel: "User Type:",
    studentNumberLabel: "Student Number:",
    usernameLabel: "Username:",
    adminCode: "Admin Code",
    user: "User",
    
    // Course sections
    enrolledCoursesTitle: "My Enrolled Courses",
    enrolledCoursesSubtitle: "Your approved and active courses",
    myCoursesTitle: "My Courses",
    myCoursesSubtitle: "All courses you have added",
    favoriteCoursesTitle: "My Favorite Courses",
    favoriteCoursesSubtitle: "Summer school courses you selected",
    academicianDashboardTitle: "Academician Dashboard",
    academicianDashboardSubtitle: "Manage your courses and track applications",
    coursePlanningTitle: "Course Planning",
    coursePlanningSubtitle: "Calendar and planning of courses you are enrolled in",
    
    // Course details
    universityLabel: "University:",
    academicianLabel: "Academician:",
    startLabel: "Start:",
    endLabel: "End:",
    creditsLabel: "Credits:",
    statusLabel: "Status:",
    courseLink: "Go to Course Link",
    courseLinkNotAdded: "Course link not added yet",
    cancelCourse: "Cancel Course",
    manageCourse: "Manage Course",
    viewApplications: "View Applications",
    registeredStudents: "Registered Students:",
    category: "Category:",
    added: "Added:",
    
    // Planning views
    previousMonth: "Previous",
    nextMonth: "Next",
    previousWeek: "Previous Week",
    nextWeek: "Next Week",
    noCourses: "No courses",
    courseCodeLabel: "Code:",
    duration: "Duration:",
    daysRemaining: "Time Remaining:",
    days: "days",
    completedPercent: "completed",
    ongoingStatus: "Ongoing",
    upcomingStatus: "Upcoming",
    completedStatus: "Completed",
    
    // Applications
    pendingApplicationsTitle: "Pending Applications",
    pendingApplicationsSubtitle: "You need to approve or reject the following applications.",
    noPendingApplications: "No pending applications",
    allApplicationsProcessed: "All your applications have been processed.",
    studentEmail: "Email not found",
    studentNumberShort: "Student No:",
    courseLabel: "Course:",
    applicationNoteLabel: "Application Note:",
    waitingStatus: "Waiting",
    allApplications: "All Applications",
    confirmApplication: "Are you sure you want to approve this application?",
    rejectionReason: "Rejection reason (optional):",
    
    // Profile edit
    editProfileTitle: "Edit Profile",
    changePassword: "Change Password (Optional)",
    currentPassword: "Current Password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    passwordPlaceholder: "Can be left blank",
    cannotChangeField: "This field cannot be changed",
    canChangeUsername: "You can change your username",
    profileUpdated: "Profile updated successfully!",
    
    // Statistics
    totalCourse: "Total Course",
    upcomingLabel: "Upcoming",
    ongoingLabel: "Ongoing",
    pastLabel: "Completed",
    totalCreditsLabel: "Total Credits",
    totalCourseLabel: "Total Course",
    activeCourseLabel: "Active Course",
    totalStudentLabel: "Total Student",
    pendingApplicationLabel: "Pending Application",
    
    // Messages
    noEnrolledCourses: "You haven't enrolled in any courses yet.",
    browseCourses: "Browse courses",
    errorLoadingCourses: "An error occurred while loading courses.",
    noCoursesToPlan: "No courses to plan.",
    errorLoadingPlanning: "An error occurred while loading planning.",
    noCoursesAdded: "You haven't added any courses yet.",
    addNewCourse: "Add new course",
    errorLoadingMyCourses: "An error occurred while loading courses.",
    removeFavoriteConfirm: "Are you sure you want to remove this course from favorites?",
    favoriteRemoved: "Course removed from favorites!",
    withdrawCourseConfirm: "Are you sure you want to withdraw from this course?",
    withdrawCourseWarning: "This action cannot be undone and your course registration will be cancelled.",
    courseWithdrawn: "Successfully withdrew from course!",
    applicationApproved: "Application approved successfully!",
    applicationRejected: "Application rejected!",
    
    // Profile edit errors
    sessionNotFound: "Session information not found. Please log in again.",
    currentPasswordRequired: "You must enter your current password to change it.",
    passwordsNotMatch: "New passwords do not match.",
    passwordMinLength: "New password must be at least 6 characters.",
    usernameMinLength: "Username must be at least 3 characters.",
    usernameInvalidChars: "Username can only contain letters, numbers, and underscores.",
    profileUpdateError: "An error occurred while updating profile.",
    serverConnectionError: "Could not connect to server. Please try again.",
    
    // Footer
    footerDescription: "Turkey's most comprehensive summer courses tracking platform. The easiest way to reach your academic goals.",
    mainPage: "Main Page",
    contactLabel: "Contact",
    location: "Gaziantep, Turkey",
    
    // Universities page
    universitiesTitle: "Universities",
    universitiesSubtitle: "Shape your academic future with summer courses from 200+ universities",
    allUniversities: "All Universities",
    allAcademicians: "All Academicians",
    allStudents: "All Students",
    mostPreferred: "Most preferred universities",
    addUniversity: "Add University",
    newUniversity: "Add New University",
    universityName: "University Name",
    city: "City",
    website: "Website",
    type: "Type",
    description: "Description",
    state: "State",
    foundation: "Foundation",
    private: "Private",
    add: "Add",
    academician: "Academician",
    student: "Student",
    goToWebsite: "Go to Website",
    noWebsite: "No Website",
    deleteUniversity: "Delete University",
    confirmDeleteUniversity: "Are you sure you want to delete the university",
    universityAdded: "University added successfully!",
    universityDeleted: "University deleted successfully!",
    universityNotFound: "University information not found.",
    contactAdmin: "Please contact the administrator.",
    noUniversityAdded: "No universities have been added yet.",
    clickToAdd: "Click the button above to add a new university.",
    universityInfo: "Academician and Student Numbers",
    
    // About page
    aboutTitle: "General Information",
    aboutText1: "Campus Summer Domestic and Foreign Trade Inc. was established in 2025 and has been serving in the field of summer courses at universities since 2025. Campus Summer, with its philosophy of \"Technology for everyone\", is always with students everywhere, facilitating access to technology and providing an enjoyable university environment.",
    aboutText2: "Campus Summer, which makes a difference in its sector with its widespread presence, service quality, reliability, product diversity, and dynamic, innovative, and progressive structure, shapes the future together with its stakeholders.",
    aboutText3: "Campus Summer is a platform where students can easily find summer schools to prevent their university from extending, and where the connection between the university and the student is established.",
    aboutText4: "Campus Summer, which introduced students in Turkey to the summer school platform for the first time, today appeals to a wide student base. Campus Summer draws its strength from students, its success from administrators, and its future from the understanding of sustainability.",
    breadcrumbHome: "Home",
    breadcrumbAbout: "About",
    
    // Contact page
    contactTitle: "Contact",
    contactSubtitle: "Contact us, let us answer your questions",
    contactInfo: "Contact Information",
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    workingHours: "Working Hours",
    weekdays: "Monday - Friday: 09:00 - 18:00",
    weekend: "Weekend: Closed",
    sendMessage: "Send Us a Message",
    fullName: "Full Name",
    phone: "Phone",
    recipient: "Who would you like to send to?",
    select: "Select...",
    both: "Both",
    subject: "Subject",
    message: "Your Message",
    send: "Send Message",
    sending: "Sending...",
    namePlaceholder: "Your first and last name",
    emailPlaceholder: "example@email.com",
    phonePlaceholder: "+90 5XX XXX XX XX",
    subjectPlaceholder: "Subject of your message",
    messagePlaceholder: "Write your message here...",
    fillAllFields: "Please fill in all required fields.",
    messageSent: "Your message has been sent successfully!",
    messageError: "An error occurred while sending the message. Please try again.",
    connectionError: "Could not connect to server. Please check your internet connection and try again.",
    ourTeam: "Our Team",
    developer: "Developer",
    
    // Courses page filters
    filterTitle: "Filter",
    courseNameLabel: "Course Name",
    courseNamePlaceholder: "Search course name...",
    universityLabel: "University",
    allUniversities: "All Universities",
    courseLanguageLabel: "Course Language",
    allLanguages: "All Languages",
    turkish: "Turkish",
    english: "English",
    minFee: "Min Fee (₺)",
    maxFee: "Max Fee (₺)",
    unlimited: "Unlimited",
    applicationStart: "Application Start",
    applicationEnd: "Application End",
    courseStart: "Course Start",
    courseEnd: "Course End",
    onlyWithQuota: "Only courses with quota",
    clearFilters: "Clear Filters",
    coursesFound: "courses found",
    popularCourses: "Popular Courses",
    popularCoursesSubtitle: "Most preferred summer courses",
    allCourses: "All Courses",
    allCoursesSubtitle: "Courses you can add to your favorites",
    myCoursesSubtitle: "Only courses you have added are shown",
    addCourseTitle: "Add Course",
    addCourseSubtitle: "Add a new course",
    courseNameRequired: "Course Name *",
    courseCodeLabel: "Course Code",
    categoryLabel: "Category",
    selectCategory: "Select Category",
    mathematics: "Mathematics",
    chemistry: "Chemistry",
    computerProgramming: "Computer Programming",
    physics: "Physics",
    statistics: "Statistics",
    other: "Other",
    descriptionLabel: "Description",
    applicationDeadline: "Application Deadline",
    startDateLabel: "Start Date",
    endDateLabel: "End Date",
    priceLabel: "Fee (₺)",
    quotaLabel: "Quota",
    languageLabel: "Course Language",
    addCourseButton: "Add Course",
    courseAdded: "Course added successfully! Your courses are being updated below...",
    noCoursesYet: "No courses added yet",
    noCoursesMatch: "No courses found matching your filter criteria. Please change filters and try again.",
    noCoursesAddedYet: "You haven't added any courses yet. You can add a course using the form above.",
    editCourse: "Edit",
    deleteCourse: "Delete Course",
    confirmDeleteCourse: "Are you sure you want to permanently delete this course?",
    deleteCourseWarning: "This action cannot be undone!",
    courseDeleted: "Course deleted successfully!",
    courseUpdated: "Course updated successfully!",
    addToFavorites: "Add to Favorites",
    removeFromFavorites: "Remove from Favorites",
    apply: "Apply",
    viewDetails: "View Details",
    applicationDeadlinePassed: "Application Deadline Passed",
    yourCourse: "Your Course",
    teacher: "Teacher:",
    fee: "Fee",
    quota: "Quota",
    language: "Language",
    students: "Students",
    notSpecified: "Not specified",
    noDescription: "No description available",
    courseDetails: "About the Course",
    courseInfo: "Course Information",
    importantDates: "Important Dates",
    prerequisites: "Prerequisites",
    equivalencyInfo: "Equivalency Information",
    courseInstructor: "Course Instructor",
    emailLabel: "Email:",
    free: "Free",
    credits: "Credits",
    courseHours: "Course Hours",
    hours: "Hours",
    enrolledStudents: "Enrolled Students",
    occupancyRate: "Occupancy Rate",
    applications: "Applications",
    enrolledStudentsTitle: "Enrolled Students",
    noEnrolledStudents: "No students enrolled in this course yet.",
    removeFromCourse: "Remove from Course",
    confirmRemoveStudent: "Are you sure you want to remove this student from the course?",
    removeStudentWarning: "This action cannot be undone and the student's course registration will be cancelled.",
    studentRemoved: "Student removed from course successfully!",
    noApplications: "No applications submitted yet.",
    applicationStatus: "Status",
    approved: "Approved",
    rejected: "Rejected",
    statusUpdate: "Status Update:",
    rejectionReasonLabel: "Rejection Reason:",
    confirmApply: "Are you sure you want to apply to this course?",
    applicationSubmitted: "Your application has been received successfully! Waiting for academician approval.",
    applicationError: "Could not submit application",
    pleaseLogin: "Please log in first",
    courseLinkLabel: "Course Link (Udemy, YouTube, etc.)",
    courseLinkPlaceholder: "https://www.udemy.com/course/...",
    courseLinkHelp: "Students can access course content by clicking this link",
    editCourseTitle: "Edit Course",
    saveButton: "Save",
    cancelButton: "Cancel",
    courseNameSearch: "Search course name...",
    universitiesNotLoaded: "Universities could not be loaded",
    editCourseLink: "Course Link (Udemy, YouTube, etc.)",
    people: "People",
    enrollmentDate: "Enrollment Date:",
    enrolled: "Enrolled",
    rejectApplicationConfirm: "Are you sure you want to reject this application?"
  }
};

// Get current language from localStorage or default to Turkish
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'tr';
}

// Set language
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// Get translation for a key
function t(key, lang = null) {
  const currentLang = lang || getCurrentLanguage();
  return translations[currentLang] && translations[currentLang][key] 
    ? translations[currentLang][key] 
    : key;
}

// Change language function
function changeLanguage(lang) {
  // Save language preference
  setLanguage(lang);
  
  // Update HTML lang attribute
  const htmlElement = document.documentElement;
  if (htmlElement) {
    htmlElement.setAttribute('lang', lang);
  }
  
  // Update all elements with data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(element => {
    const key = element.getAttribute('data-translate');
    const translatedText = t(key, lang);
    if (translatedText !== key) {
      element.textContent = translatedText;
    }
  });
  
  // Update placeholder attributes
  document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
    const key = element.getAttribute('data-translate-placeholder');
    const translatedText = t(key, lang);
    if (translatedText !== key) {
      element.placeholder = translatedText;
    }
  });
  
  // Update title attributes
  document.querySelectorAll('[data-translate-title]').forEach(element => {
    const key = element.getAttribute('data-translate-title');
    const translatedText = t(key, lang);
    if (translatedText !== key) {
      element.title = translatedText;
    }
  });
  
  // Update alt attributes
  document.querySelectorAll('[data-translate-alt]').forEach(element => {
    const key = element.getAttribute('data-translate-alt');
    const translatedText = t(key, lang);
    if (translatedText !== key) {
      element.alt = translatedText;
    }
  });
  
  // Trigger custom event for pages that need to do additional translation
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: lang } }));
}

// Apply saved language on page load
function applySavedLanguage() {
  const currentLang = getCurrentLanguage();
  changeLanguage(currentLang);
}

// Initialize translation on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applySavedLanguage);
} else {
  applySavedLanguage();
}

