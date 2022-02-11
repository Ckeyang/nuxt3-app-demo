
<template>
  <section>
    <section class="text-3xl text-center mb-8">
      没错 这些还是去官网扒拉的
      <a class="text-blue-400" href="https://element-plus.gitee.io/zh-CN/">
        element plus
      </a>
    </section>
    <el-card class="box-card">
      <el-row class="mb-4">
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button>中文</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </el-row>

      <el-row class="mb-4">
        <el-button round>Round</el-button>
        <el-button type="primary" round>Primary</el-button>
        <el-button type="success" round>Success</el-button>
        <el-button type="info" round>Info</el-button>
        <el-button type="warning" round>Warning</el-button>
        <el-button type="danger" round>Danger</el-button>
      </el-row>

      <el-row>
        <el-button :icon="Search" circle></el-button>
        <el-button type="primary" :icon="Edit" circle></el-button>
        <el-button type="success" :icon="Check" circle></el-button>
        <el-button type="info" :icon="Message" circle></el-button>
        <el-button type="warning" :icon="Star" circle></el-button>
        <el-button type="danger" :icon="Delete" circle></el-button>
      </el-row>
    </el-card>
    <el-card class="mt-4 leading-10">
      <el-progress :percentage="50" :indeterminate="true" />
      <el-progress :percentage="100" :format="format" :indeterminate="true" />
      <el-progress
        :percentage="100"
        status="success"
        :indeterminate="true"
        :duration="5"
      />
      <el-progress
        :percentage="100"
        status="warning"
        :indeterminate="true"
        :duration="1"
      />
      <el-progress :percentage="50" status="exception" :indeterminate="true" />
      <el-progress type="circle" :percentage="100" status="success">
        <el-button type="success" :icon="Check" circle></el-button>
      </el-progress>
      <el-progress type="dashboard" :percentage="80">
        <template #default="{ percentage }">
          <span class="percentage-value">{{ percentage }}%</span>
        </template>
      </el-progress>
    </el-card>
    <el-card class="mt-4">
      <el-calendar v-model="value" />
    </el-card>
  </section>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const value = ref("");
const format = (percentage: any) =>
  percentage === 100 ? "Full" : `${percentage}%`;
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
} from "@element-plus/icons-vue";
</script>

<style>
:root {
  --el-color-primary: #409eff;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-error: #f56c6c;
  --el-color-info: #909399;
}
</style>