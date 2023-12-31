package com.kmong.kmongdemo.mapper;

import com.kmong.kmongdemo.domain.AdminCategoryDTO;
import com.kmong.kmongdemo.domain.AdminServiceTypeDTO;
import com.kmong.kmongdemo.domain.JobDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AdminCategoryMapper {
    List<JobDTO> jobList();
    int insertJob(String jname);
    int removeJob(int jid);

    List<AdminServiceTypeDTO> typeList();
    int insertType(AdminServiceTypeDTO tdto);
    int removeType(int tid);

    List<AdminCategoryDTO> categoryList();
    AdminCategoryDTO categoryView(int cid);
    int insertCategory(AdminCategoryDTO cdto);
    int maxId();
    int modifyCategory(AdminCategoryDTO cdto);
    void checkUp(int id);
    int removeCategory(int cid);
    int removeCategoryU(int cid);

}
