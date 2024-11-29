

<template class="dialogResult">
  <el-dialog v-model="dialogVisible" width="500" title="Result" :show-close="false">
    <el-table :data="formattedResult" border>
      <el-table-column prop="key" label="Key" width="200"></el-table-column>
      <el-table-column prop="value" label="Value" width="300" align="left"></el-table-column>
    </el-table>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">OK</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script>
import { computed, ref } from "vue";

function convertKeysToTitleCase(obj) {
  const result = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = key
        .replace(/([A-Z])/g, ' $1')
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      result[newKey] = obj[key];
    }
  }

  return result;
}

export default {
  name: "VerificationResultModal",
  setup() {
    const dialogVisible = ref(false);
    const result = ref({});
    // const keyMap = {
    //   abbr3Country: "Трехбуквенный код страны",
    //   abbrCountry: "Код страны",
    //   address: "Адрес",
    //   cardRevisionDate: "Дата пересмотра карты",
    //   city: "Город",
    //   class: "Класс",
    //   country: "Страна",
    //   dob: "Дата рождения",
    //   expires: "Действителен до",
    //   eyes: "Цвет глаз",
    //   familyName: "Фамилия",
    //   firstName: "Имя",
    //   fullName: "Полное имя",
    //   gender: "Пол",
    //   hair: "Цвет волос",
    //   hazmatExpirationDate: "Срок действия HAZMAT",
    //   height: "Рост",
    //   id: "ID",
    //   idType: "Тип ID",
    //   issued: "Выдан",
    //   issuedBy: "Выдан",
    //   maidenName: "Девичья фамилия",
    //   middleName: "Отчество",
    //   placeOfBirth: "Место рождения",
    //   postalBox: "Почтовый ящик",
    //   race: "Раса",
    //   ssn: "SSN",
    //   state: "Штат",
    //   suffix: "Суффикс",
    //   weight: "Вес",
    //   zip: "Индекс",
    // };

    const show = (data) => {
      console.log("show", data.document);
      result.value = data.document;
      dialogVisible.value = true;
    };

    const closeModal = () => {
      dialogVisible.value = false;
    };

    const formattedResult = computed(() => {
      const convertedResult = convertKeysToTitleCase(result.value);
      return Object.keys(convertedResult).map((key) => ({
        key: key,
        value: convertedResult[key],
      }));
    });

    // const formattedResult = computed(() => {
    //   return Object.keys(result.value).map((key) => ({
    //     key: keyMap[key] || key,
    //     value: result.value[key],
    //   }));
    // });


    return {
      dialogVisible,
      result,
      show,
      closeModal,
      formattedResult,
    };
  },
};
</script>

<style>

</style>
