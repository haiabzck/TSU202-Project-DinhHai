// Tạo dữ liệu mẫu khi chưa có danh mục
let categories = JSON.parse(localStorage.getItem("categories")); // null
let formAddProduct = document.getElementById("form-addProduct");
if (!categories) {
    categories = [
        { id:1 ,productCode: "DM001", productName: "Quần Áo", status: "ACTIVE", img: "../img/anh1.png" },
        { id:2 ,productCode: "DM002", productName: "Kính mắt", status: "ACTIVE", img: "../img/anh2.png" },
        { id:3 ,productCode: "DM003", productName: "Điện tử", status: "INACTIVE", img: "../img/anh3.png" },
        { id:4 ,productCode: "DM004", productName: "Hoa quả", status: "ACTIVE", img: "../img/anh4.png" },
        { id:5 ,productCode: "DM005", productName: "Giày dép", status: "INACTIVE", img: "../img/anh1.png" },
    ];
}
localStorage.setItem("categories", JSON.stringify(categories));

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


// Render du lieu ra man hinh
function renderCategories(arr) {
    let tableCategories = document.getElementById("table-categories");
    tableCategories.innerHTML = ""; // reset du lieu ben trong the
    let newCategories = arr.map((c) => {
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
}
renderCategories(categories);



function isProductcode(code) {
    return categories.some(p => 
        p.productCode.toLowerCase() === code.toLowerCase()
    );
}
function isProductname(name) {
    return categories.some(p => 
        p.productName.toLowerCase() === name.toLowerCase()
    );
}

// Them, sua san pham
formAddProduct.addEventListener("submit", (event) => {
    event.preventDefault();
    let productCodeInput = formAddProduct.productCode.value.trim();
    let productNameInput = formAddProduct.productName.value.trim();
    let id = Number(formAddProduct.courseId.value);
    let checkCode = categories.some((c) => {
        return c.productCode.toLowerCase() === productCodeInput.toLowerCase() && c.id !== id;
        });
    let checkName = categories.some((c) => {
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
        let index = categories.findIndex((el) => el.id === id);
        categories[index].productCode = productCodeInput;
        categories[index].productName = productNameInput;
        categories[index].status = formAddProduct.status.value;
        localStorage.setItem("categories", JSON.stringify(categories));
        modal.classList.remove('show-modal');
        renderCategories(categories);
        alert("Cập nhật thành công");
        formAddProduct.courseId.value = ''; 

  } else {
    if (validateData(formAddProduct)) {
        let checkCode = categories.some((c) => {
        return c.productCode.toLowerCase() === productCodeInput.toLowerCase();
        });
        console.log(checkCode);
        let checkName = categories.some((c) => {
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
        
        categories.push(newCategory);
        localStorage.setItem("categories", JSON.stringify(categories));
        modal.classList.remove('show-modal');
        renderCategories(categories);
        alert("Thêm mới thành công");
    }
  }
});
renderCategories(categories);

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
renderCategories(categories);

// Xoa san pham
function handleDelete(id) {
        if (categories.length <= 1) {
        alert("Cảnh báo: Phải có ít nhất 1 sản phẩm trong danh sách. Không được xóa!");
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
        categories = categories.filter((c) => {
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
    
        localStorage.setItem("categories", JSON.stringify(categories));
        renderCategories(categories);
    });
   
}

// Tim kiem san pham
let inputSearch = document.getElementById("input-search");
inputSearch.addEventListener("input", (event) => {
    let value = inputSearch.value.trim().toLowerCase();
    let newArr = categories.filter((c) => {
        return c.productName.toLowerCase().includes(value);
    });
    console.log(newArr);
    renderCategories(newArr);
});

function showEdit(id) {
  let edit = categories.find((el) => el.id === id);
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
// Lọc theo status
let filterSelect = document.getElementById('filterSelect');
filterSelect.addEventListener('change', function() {
    let selectedValue = this.value;
    if(selectedValue==="all"){
            renderCategories(categories);
    }else{
        let filtered = categories.filter((p) => {
        
        return p.status===selectedValue;
        
        });
        console.log(filtered);
        renderCategories(filtered);
        }
  
});

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


renderCategories(categories);

