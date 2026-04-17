// Tạo dữ liệu mẫu khi chưa có danh mục
let products = JSON.parse(localStorage.getItem("products")); // null
let formAddProduct = document.getElementById("form-addProduct");
if (!products) {
     products = [
    { id: 1, productCode : "SP001" ,productName: "iPhone 15 Pro Max", price: "28.000.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 2, productCode : "SP002" ,productName: "Samsung Galaxy S24 Ultra", price: "26.500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 3, productCode : "SP003" ,productName: "MacBook Air M3", price: "27.990.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 4, productCode : "SP004" ,productName: "Sony WH-1000XM5", price: "6.500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 5, productCode : "SP005" ,productName: "Apple Watch Series 9", price: "9.200.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 6, productCode : "SP006" ,productName: "Bàn phím cơ Keychron K2", price: "1.800.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 7, productCode : "SP007" ,productName: "Chuột Logitech MX Master 3S", price: "2.300.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 8, productCode : "SP008" ,productName: "Màn hình Dell Ultrasharp", price: "8.500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 9, productCode : "SP009" ,productName: "iPad Pro M2", price: "21.000.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 10,productCode : "SP010" , productName: "Loa Marshall Emberton II", price: "3.200.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 11,productCode : "SP011" , productName: "Máy ảnh Fujifilm X-T5", price: "42.000.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 12,productCode : "SP012" , productName: "Tai nghe Airpods Pro 2", price: "5.500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 13,productCode : "SP013" , productName: "Sạc dự phòng Anker 20000mAh", price: "1.200.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 14,productCode : "SP014" , productName: "Đồng hồ Garmin Fenix 7", price: "15.000.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 15,productCode : "SP015" , productName: "Tay cầm PS5 DualSense", price: "1.600.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 16,productCode : "SP016" , productName: "Ổ cứng SSD Samsung 1TB", price: "2.500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 17,productCode : "SP017" , productName: "Bút Apple Pencil 2", price: "2.800.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 18,productCode : "SP018" , productName: "Loa Bluetooth JBL Flip 6", price: "2.400.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 19,productCode : "SP019" , productName: "Microphone Blue Yeti", price: "3.500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""},
    { id: 20,productCode : "SP020" , productName: "Đèn bàn học chống cận", price: "500.000đ" ,quantity :100,discount:0,image:"",status : "ACTIVE",ctaegory_id: 1,desc:"",create_at:""}
];
}
localStorage.setItem("products", JSON.stringify(products));

let boxLogout=document.querySelector(".avatar");
let modalShow = document.querySelector('.dropdown-menu');
boxLogout.addEventListener("click",() => {
    modalShow.classList.toggle('box-logout');
});
//Logout
let isLogin = JSON.parse(localStorage.getItem("isLogin"));
if (!isLogin) {
    window.location.href = "login.html";
}

let btnLogout = document.getElementById("btn-logout");
btnLogout.addEventListener("click", () => {
    if (confirm("Bạn chắc chắn muốn logout không")) {
        localStorage.removeItem("isLogin");
        window.location.href = "login.html";
    }
}); 

let modal = document.getElementById('modal');
let showModalBtn = document.getElementById('show-modal');
let closeModalBtn = document.querySelector('.close-modal');
let closeCanceBtn = document.getElementById('close-modal');
let button = formAddProduct.querySelector('.btn-submit');
let titel = formAddProduct.querySelector('.modal-header h3');
let errorProductid =document.querySelector('.error-id');
let errorproductName =document.querySelector('.error-name');
showModalBtn.addEventListener('click', () => {
    modal.classList.add('show-modal');
    button.innerText = 'Thêm';
    titel.innerText = 'Thêm mới danh mục';
    formAddProduct.productCode.value = '';
    formAddProduct.productName.value = '';
    formAddProduct.productCode.style.border='';
    formAddProduct.productName.style.border = '';
});
closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show-modal');
    formAddProduct.productCode.value = '';
    formAddProduct.productName.value = '';
    formAddProduct.productCode.style.border='';
    formAddProduct.productName.style.border = '';
    errorProductid.innerText ='';
    errorproductName.innerText ='';
});
closeCanceBtn.addEventListener('click', () => {
    console.log("Đã bấm Hủy");
    modal.classList.remove('show-modal');
    formAddProduct.productCode.style.border='';
    formAddProduct.productName.style.border = '';
    errorProductid.innerText ='';
    errorproductName.innerText ='';
    formAddProduct.courseId.value = '';
});
window.addEventListener('click', (e) => {
    (e.target === modal ? modal.classList.remove('show-modal') : false);
});

let sortDirection = 0; // 0: Mặc định, 1: A-Z, -1: Z-A
let sortName = document.getElementById('sortByName');
sortName.addEventListener('click', function() {
    // Logic xoay vòng: Mặc định -> A-Z -> Z-A -> Mặc định
    if (sortDirection === 0 || sortDirection === -1) {
        sortDirection = 1; // Chuyển sang A-Z
        document.getElementById('sortIcon').innerHTML = '<i class="fa-solid fa-arrow-up">';
    } else {
        sortDirection = -1; // Chuyển sang Z-A
        document.getElementById('sortIcon').innerHTML = '<i class="fa-solid fa-arrow-down">';
    }
    currentPage = 1; // Luôn reset về trang 1 khi sắp xếp
    renderCategories(products);
}); 

let currentPage = 1;
let rowsPerPage = 10;
// Render du lieu ra man hinh
function renderCategories(arr) {
    let tableCategories = document.getElementById("table-categories");
    if (sortDirection !== 0) {
        arr.sort((a, b) => {
            const nameA = a.productName.toLowerCase();
            const nameB = b.productName.toLowerCase();
            
            // localeCompare giúp sắp xếp tiếng Việt chuẩn xác
            return sortDirection === 1 
                ? nameA.localeCompare(nameB) 
                : nameB.localeCompare(nameA);
        });
    }
     // 1. Tính toán vị trí bắt đầu và kết thúc
    let startIndex = (currentPage - 1) * rowsPerPage;
    let endIndex = startIndex + rowsPerPage;
    
    // 2. Cắt mảng dữ liệu để hiển thị trang hiện tại
    let pageData = arr.slice(startIndex, endIndex);
    tableCategories.innerHTML = ""; // reset du lieu ben trong the
    let newCategories = pageData.map((c) => {
        let newStatus ='';
        let newClass ='';
        //console.log(c.status == "ACTIVE");
        if(c.status==="ACTIVE"){
            newStatus='Đang hoạt động';
            newClass='active';
        }else{
            newStatus='Ngừng hoạt động';
            newClass='inactive';
        }
        return `
            <tr>
                <td>${c.productCode}</td>
                <td>${c.productName}</td>
                <td>${c.price}</td>
                <td>${c.quantity}</td>
                <td>${c.discount}</td>
                <td><span class="status ${newClass}" data-category="${c.status}">● ${newStatus}</span></td>
                <td class="actions">
                    <button onclick="handleDelete(${c.id})" value="${c.id}" ><i class="fa-solid fa-trash-can delete"></i></button>
                    <button onclick="showEdit(${c.id})"><i class="fa-solid fa-pencil edit"></i></button>
                </td>
            </tr>
    `
    }).join("");
    // .join("")  chuyển mảng thành chuỗi
    tableCategories.innerHTML = newCategories;
    renderPagination(arr.length,arr);
}

renderCategories(products);

function renderPagination(totalItems,newArr) {
    let paginationWrapper = document.getElementById('pagination');
    paginationWrapper.innerHTML = "";
    let pageCount = Math.ceil(totalItems / rowsPerPage);
    if (pageCount <= 1) return;
    for (let i = 1; i <= pageCount; i++) {
        let btn = document.createElement("button");
        btn.innerText = i;
        if (i === currentPage){
             btn.classList.add('active');
        }

        btn.addEventListener('click', () => {
            currentPage = i; // Cập nhật lại trang hiện tại khi người dùng bấm số mới
            
            // Gọi lại hàm hiển thị sản phẩm với số trang vừa bấm
            renderCategories(newArr);
            
        });
        paginationWrapper.appendChild(btn);
    }
}
renderCategories(products);

// Them, sua san pham
formAddProduct.addEventListener("submit", (event) => {
    event.preventDefault();
    let productCodeInput = formAddProduct.productCode.value.trim();
    let productNameInput = formAddProduct.productName.value.trim();
    let id = Number(formAddProduct.courseId.value);
    let checkCode = products.some((c) => {
        return c.productCode.toLowerCase() === productCodeInput.toLowerCase() && c.id !== id;
        });
    let checkName = products.some((c) => {
        return c.productName.toLowerCase() === productNameInput.toLowerCase() && c.id !== id;
        });

        if(checkCode && checkName){
            alert("Mã & Tên danh mục trùng!");
            return;
        }else if (checkCode) {
            alert("Mã danh mục trùng!");
            return;
        }else if(checkName){
            alert("Tên danh mục trùng!");
            return;
        } 
    if (id) {  
        let index = products.findIndex((el) => el.id === id);
        products[index].productCode = productCodeInput;
        products[index].productName = productNameInput;
        products[index].status = formAddProduct.status.value;
        localStorage.setItem("products", JSON.stringify(products));
        modal.classList.remove('show-modal');
        renderCategories(products);
        alert("Cập nhật thành công");
        formAddProduct.courseId.value = ''; 

  } else {
    if (validateData(formAddProduct)) {
        let checkCode = products.some((c) => {
        return c.productCode.toLowerCase() === productCodeInput.toLowerCase();
        });
        let checkName = products.some((c) => {
        return c.productName.toLowerCase() === productNameInput.toLowerCase();
        });

        if(checkCode && checkName){
            alert("Mã & Tên danh mục trùng!");
            return;
        }else if (checkCode) {
            alert("Mã danh mục trùng!");
            return;
        }else if(checkName){
            alert("Tên danh mục trùng!");
            return;
        } 
        let newCategory = {
            id: Math.floor(Math.random() * 10000),
            productCode: productCodeInput,
            productName: productNameInput,
            status: formAddProduct.status.value
        }
        
        products.push(newCategory);
        localStorage.setItem("products", JSON.stringify(products));
        modal.classList.remove('show-modal');
        currentPage = Math.ceil(products.length / rowsPerPage);
        renderCategories(products);
        alert("Thêm mới thành công");
    }
  }
});
renderCategories(products);

function validateData(form) {
  let check = true;
   if (form.productCode.value === '') {
    errorProductid.innerText = 'Không được để trống';
    form.productCode.style.border = '1px solid red';
    check = false;
  }
  else {
    errorProductid.innerText ='';
  }
  if (form.productName.value === '') {
    errorproductName.innerText = 'Không được để trống';
    form.productName.style.border = '1px solid red';
    check = false;
  }
  else {
    errorproductName.innerText ='';
  }
  return check;
}  

function showEdit(id) {
  let edit = products.find((el) => el.id === id);
  if (edit) {
    // fill dữ liệu vào form
    formAddProduct.courseId.value = edit.id;
    formAddProduct.productCode.value = edit.productCode;
    formAddProduct.productName.value = edit.productName;
    formAddProduct.status.value = edit.status;
    // nút -> update
    modal.classList.add('show-modal');
    button.innerText = 'Lưu';
    titel.innerText = 'Cập nhật danh mục';
  }
}
// Xoa san pham
function handleDelete(id) {
    if (products.length <= 1) {
        alert("Phải có ít nhất 1 sản phẩm trong danh sách. Không được xóa!");
        return; 
    }
    let alertBox = document.createElement("div");
    alertBox.innerHTML = `<div class="modal-delete show-modal-delete " id="modal-delete">
                            <div class="confirm-modal">
                                <div class="icon-warning">
                                    <i class="fa-solid fa-circle-exclamation"></i>
                                </div>
                                <h3>Xác nhận</h3>
                                <p>Bạn có chắc chắn muốn xóa sản phẩm <strong>Táo đỏ</strong> khỏi hệ thống không?</p>
                                <div class="modal-actions">
                                    <button class="btn-cancel" id="cance-delete">Hủy</button>
                                    <button class="btn-delete" id="delete">Xóa</button>
                                </div>
                            </div>
                        </div>`;
     document.body.prepend(alertBox);
     
    let modalDelete = document.getElementById('modal-delete');
    let canceDelete = document.getElementById('cance-delete');
        canceDelete.addEventListener('click',() => {
        modalDelete.classList.remove('show-modal-delete');
    });
    let isDelete = document.getElementById('delete');
    isDelete.addEventListener('click',() => {
        products = products.filter((c) => {
        return c.id !== id;
        });
        modalDelete.innerHTML = `<div class="toast-success">
                                    <div class="toast-icon">
                                        <i class="fa-solid fa-circle-check"></i>
                                    </div>
                                    
                                    <div class="toast-content">
                                        <h4 class="toast-title">Thành công</h4>
                                        <p class="toast-message">Xóa sản phẩm thành công</p>
                                    </div>

                                    <button class="toast-close" id="success-delete">
                                        <i class="fa-solid fa-xmark"></i>
                                    </button>
                                </div>`;
        let successDelete = document.getElementById('success-delete');
        successDelete.addEventListener('click',() => {
            modalDelete.classList.remove('show-modal-delete');
        });
    
        localStorage.setItem("products", JSON.stringify(products));
        currentPage = Math.ceil(products.length / rowsPerPage);
        renderCategories(products);
    });
}


// Tim kiem san pham
let inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("input", (event) => {
    let value = inputSearch.value.trim().toLowerCase();
    let newArr = products.filter((c) => {
        return c.productName.toLowerCase().includes(value);
    });
    console.log(newArr);
    currentPage = 1;
    renderCategories(newArr);
});


// Lọc theo status
let filterSelect = document.getElementById('filterSelect');
filterSelect.addEventListener('change', function() {
    let selectedValue = this.value;
    if(selectedValue==="all"){
            renderCategories(products);
    }else{
        let filtered = products.filter((p) => {
        
        return p.status===selectedValue;
        
        });
        console.log(filtered);
        currentPage = 1;
        renderCategories(filtered);
        }
  
});

renderCategories(products);

