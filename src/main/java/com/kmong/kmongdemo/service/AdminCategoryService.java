package com.kmong.kmongdemo.service;

import java.util.List;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;

public interface AdminCategoryService {
    // 직업 관리
    List<JobDTO> jobList();
    int insertJob(String jname);
    int removeJob(int jid);

    // 서비스 타입 관리
    List<AdminServiceTypeDTO> typeList();
    int insertType(String tname);
    // 카테고리 관리
    List<AdminCategoryDTO> categoryList();
    AdminCategoryDTO categoryView(int cid);

}
