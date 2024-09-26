<template>
  <div class="md">
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>粘贴HTML</span>
        </div>
      </template>
      <el-row>
        <el-col :span="24">
          <el-input
            v-model="textarea"
            placeholder="请粘贴数据"
            rows="4"
            show-word-limit
            type="textarea"
          />
        </el-col>
        <div class="operation">
          <el-button type="primary" class="button" @click="onSave">
            转换
          </el-button>
        </div>
      </el-row>
    </el-card>

    <div v-if="editor">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>内容识别</span>
            <el-space>
              <el-dropdown placement="bottom-start">
                <el-button text> 标题 </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-space direction="vertical">
                      <el-button
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 1 })
                            .run()
                        "
                        :class="{
                          'is-active': editor.isActive('heading', { level: 1 }),
                        }"
                      >
                        <h1>H1</h1>
                      </el-button>
                      <el-button
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 2 })
                            .run()
                        "
                        :class="{
                          'is-active': editor.isActive('heading', { level: 2 }),
                        }"
                      >
                        <h2>H2</h2>
                      </el-button>
                      <el-button
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 3 })
                            .run()
                        "
                        :class="{
                          'is-active': editor.isActive('heading', { level: 3 }),
                        }"
                      >
                        <h3>H3</h3>
                      </el-button>
                      <el-button
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 4 })
                            .run()
                        "
                        :class="{
                          'is-active': editor.isActive('heading', { level: 4 }),
                        }"
                      >
                        <h4>H4</h4>
                      </el-button>
                      <el-button
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 5 })
                            .run()
                        "
                        :class="{
                          'is-active': editor.isActive('heading', { level: 5 }),
                        }"
                      >
                        <h5>H5</h5>
                      </el-button>
                      <el-button
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .toggleHeading({ level: 6 })
                            .run()
                        "
                        :class="{
                          'is-active': editor.isActive('heading', { level: 6 }),
                        }"
                      >
                        <h6>H6</h6>
                      </el-button>
                    </el-space>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
              <el-button
                text
                @click="editor.chain().focus().toggleItalic().run()"
                :disabled="!editor.can().chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }"
              >
                倾斜
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().toggleStrike().run()"
                :disabled="!editor.can().chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }"
              >
                下划线
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().toggleBold().run()"
                :disabled="!editor.can().chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }"
              >
                加粗
              </el-button>

              <el-button
                text
                @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }"
              >
                无序列表
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().toggleOrderedList().run()"
                :class="{ 'is-active': editor.isActive('orderedList') }"
              >
                有序列表
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().toggleCode().run()"
                :disabled="!editor.can().chain().focus().toggleCode().run()"
                :class="{ 'is-active': editor.isActive('code') }"
              >
                代码
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().toggleCodeBlock().run()"
                :class="{ 'is-active': editor.isActive('codeBlock') }"
              >
                代码块
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().setHorizontalRule().run()"
              >
                横线
              </el-button>
              <el-button
                text
                @click="editor.chain().focus().toggleBlockquote().run()"
                :class="{ 'is-active': editor.isActive('blockquote') }"
              >
                引用
              </el-button>
              <el-dropdown placement="bottom-start">
                <el-button text> 表格 </el-button>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-space direction="vertical">
                      <el-button
                        class="button"
                        text
                        @click="
                          editor
                            .chain()
                            .focus()
                            .insertTable({
                              rows: 3,
                              cols: 3,
                              withHeaderRow: true,
                            })
                            .run()
                        "
                      >
                        新增表格
                      </el-button>
                      <el-button
                        class="button"
                        text
                        @click="editor.chain().focus().addColumnBefore().run()"
                        :disabled="!editor.can().addColumnBefore()"
                      >
                        增加列
                      </el-button>
                      <el-button
                        class="button"
                        text
                        @click="editor.chain().focus().deleteColumn().run()"
                        :disabled="!editor.can().deleteColumn()"
                      >
                        删除列
                      </el-button>
                      <el-button
                        class="button"
                        text
                        @click="editor.chain().focus().addRowBefore().run()"
                        :disabled="!editor.can().addRowBefore()"
                      >
                        增加行
                      </el-button>

                      <el-button
                        class="button"
                        text
                        @click="editor.chain().focus().deleteRow().run()"
                        :disabled="!editor.can().deleteRow()"
                      >
                        删除行
                      </el-button>
                      <el-button
                        class="button"
                        text
                        @click="editor.chain().focus().mergeCells().run()"
                        :disabled="!editor.can().mergeCells()"
                      >
                        合并
                      </el-button>
                      <el-button
                        class="button"
                        text
                        @click="editor.chain().focus().splitCell().run()"
                        :disabled="!editor.can().splitCell()"
                      >
                        拆分
                      </el-button>
                    </el-space>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>

              <el-button class="button" text @click="onCopy">
                复制HTML
              </el-button>
            </el-space>
          </div>
        </template>
        <el-image
          style="width: 100px; height: 100px"
          :src="url"
          :preview-src-list="[url]"
          :initial-index="4"
          fit="cover"
        />
        <editor-content :editor="editor" />
      </el-card>
    </div>
  </div>
</template>
  
  <script setup>
import "katex/dist/katex.min.css";
import "tiptap-katex/style.css";

import { ref, onMounted, onBeforeUnmount } from "vue";
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import Highlight from "@tiptap/extension-highlight";
import Typography from "@tiptap/extension-typography";
import Image from "@tiptap/extension-image";
import { Markdown } from "tiptap-markdown";
import Mathematics from "tiptap-math";
import Math from '@aarkue/tiptap-math-extension';

import * as VueTiptapKatexAssist from 'vue-tiptap-katex-core/assist.js'

import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import { ElMessage } from "element-plus";

// 自定义TableCell扩展
const CustomTableCell = TableCell.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => ({
          "data-background-color": attributes.backgroundColor,
          style: `background-color: ${attributes.backgroundColor}`,
        }),
      },
    };
  },
});

// 使用ref来创建响应式的数据
const editor = ref(null);

// 使用md来创建响应式的数据
const textarea = ref(``);
const url = ref("");
const onSave = () => {
  if (textarea.value) {
    const list = JSON.parse(textarea.value);
    url.value = list[0]?.value;
    const string = VueTiptapKatexAssist.convertToTiptap(list[1]?.value)

    editor.value.commands.setContent(string);
  } else {
    ElMessage({
      message: "请输入要转换的数据",
      type: "warning",
    });
  }
};
// 复制HTML
const onCopy = () => {
  console.log(editor.value.getHTML());
  navigator.clipboard.writeText(editor.value.getHTML());
  ElMessage.success("内容已复制到剪贴板！");
};
// 初始化编辑器
onMounted(() => {
  editor.value = new Editor({
    extensions: [
      StarterKit.configure({
        paragraph: {
          HTMLAttributes: { dir: "auto" },
        },
      }),
      Math.configure({ evaluation: true }),
      Markdown,
      Mathematics,
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: "tiptap-table",
          style: "border-collapse: collapse !important",
        },
      }),
      TableRow.extend({
        content: "tableCell*",
      }),
      TableRow,
      Image,
      Highlight.configure({
        multicolor: true,
      }),
      Typography,
      TableHeader,
      CustomTableCell,
     
    ],
    content: `测试`,
   
  });
});

// 销毁编辑器
onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy();
  }
});
</script>
  <style lang="scss">

.box-card {
  margin-bottom: 20px;
}

.md {
  padding: 10px;

  .operation {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    margin-top: 10px;
  }
}

/* Basic editor styles */
.tiptap {
  :first-child {
    margin-top: 0;
  }

  /* List styles */
  ul,
  ol {
    padding: 0 1rem;
    margin: 1.25rem 1rem 1.25rem 0.4rem;

    li p {
      margin-top: 0.25em;
      margin-bottom: 0.25em;
    }
  }

  /* Heading styles */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
    line-height: 1.1;
    text-wrap: pretty;
  }

  h1,
  h2 {
    margin-top: 3.5rem;
    margin-bottom: 1.5rem;
  }

  h1 {
    font-size: 1.4rem;
  }

  h2 {
    font-size: 1.2rem;
  }

  h3 {
    font-size: 1.1rem;
  }

  h4,
  h5,
  h6 {
    font-size: 1rem;
  }

  /* Code and preformatted text styles */
  code {
    padding: 0.25em 0.3em;
    font-size: 0.85rem;
    color: var(--black);
    background-color: var(--purple-light);
    border-radius: 0.4rem;
  }

  pre {
    padding: 0.75rem 1rem;
    margin: 1.5rem 0;
    font-family: JetBrainsMono, monospace;
    color: var(--white);
    background: var(--black);
    border-radius: 0.5rem;

    code {
      padding: 0;
      font-size: 0.8rem;
      color: inherit;
      background: none;
    }
  }

  blockquote {
    padding-left: 1rem;
    margin: 1.5rem 0;
    border-left: 3px solid var(--gray-3);
  }

  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid var(--gray-2);
  }

  /* Table-specific styling */
  table {
    width: 100%;
    margin: 0;
    overflow: hidden;
    table-layout: fixed;
    border-collapse: collapse;
    cursor: pointer;
    td,
    th {
      position: relative;
      box-sizing: border-box;
      min-width: 1em;
      padding: 6px 8px;
      vertical-align: top;
      border: 1px solid var(--gray-3);

      > * {
        margin-bottom: 0;
      }
    }

    th {
      font-weight: bold;
      text-align: left;
      background-color: var(--gray-1);
    }

    .selectedCell::after {
      position: absolute;
      inset: 0;
      z-index: 2;
      pointer-events: none;
      content: "";
      background: var(--gray-2);
    }

    .column-resize-handle {
      position: absolute;
      top: 0;
      right: -2px;
      bottom: -2px;
      width: 4px;
      pointer-events: none;
      background-color: var(--purple);
    }
  }

  .tableWrapper {
    margin: 1.5rem 0;
    overflow-x: auto;
  }

  &.resize-cursor {
    cursor: ew-resize;
    cursor: col-resize;
  }
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
</style>
  